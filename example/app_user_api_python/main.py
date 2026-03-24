import os
import re
from typing import Any

from fastapi import FastAPI
from fastapi.responses import JSONResponse, Response

app = FastAPI(title="app_user_api_python", version="1.0.0")

PORT = int(os.environ.get("PORT", "3000"))

users: list[dict[str, Any]] = []
next_id = 1

EMAIL_RE = re.compile(r"^[^\s@]+@[^\s@]+\.[^\s@]+$")


def is_valid_email(email: str) -> bool:
    return bool(EMAIL_RE.match(email))


def validate_required_fields(body: dict[str, Any]) -> str | None:
    required_fields = ["nome", "email", "username", "password"]

    for field in required_fields:
        val = body.get(field)
        if val is None or str(val).strip() == "":
            return f"O campo '{field}' e obrigatorio."

    if not is_valid_email(str(body["email"]).strip()):
        return "Email invalido."

    return None


def parse_user_id(raw: str) -> int | None:
    """Alinha com Express: ids invalidos tratam como nao encontrado (404), nao 422."""
    try:
        return int(raw, 10)
    except ValueError:
        return None


@app.get("/users")
def list_users() -> list[dict[str, Any]]:
    return users


@app.get("/users/{user_id}", response_model=None)
def get_user(user_id: str) -> JSONResponse | dict[str, Any]:
    uid = parse_user_id(user_id)
    if uid is None:
        return JSONResponse(
            status_code=404, content={"error": "User nao encontrado."}
        )
    user = next((item for item in users if item["id"] == uid), None)
    if not user:
        return JSONResponse(
            status_code=404, content={"error": "User nao encontrado."}
        )
    return user


@app.post("/users", response_model=None)
def create_user(body: dict[str, Any]) -> JSONResponse | dict[str, Any]:
    validation_error = validate_required_fields(body)
    if validation_error:
        return JSONResponse(status_code=400, content={"error": validation_error})

    global next_id
    new_user = {
        "id": next_id,
        "nome": str(body["nome"]).strip(),
        "email": str(body["email"]).strip(),
        "username": str(body["username"]).strip(),
        "password": str(body["password"]).strip(),
    }
    next_id += 1
    users.append(new_user)
    return JSONResponse(status_code=201, content=new_user)


@app.put("/users/{user_id}", response_model=None)
def update_user(
    user_id: str, body: dict[str, Any]
) -> JSONResponse | dict[str, Any]:
    uid = parse_user_id(user_id)
    if uid is None:
        return JSONResponse(
            status_code=404, content={"error": "User nao encontrado."}
        )
    user_index = next(
        (i for i, item in enumerate(users) if item["id"] == uid), None
    )
    if user_index is None:
        return JSONResponse(
            status_code=404, content={"error": "User nao encontrado."}
        )

    validation_error = validate_required_fields(body)
    if validation_error:
        return JSONResponse(status_code=400, content={"error": validation_error})

    updated = {
        "id": uid,
        "nome": str(body["nome"]).strip(),
        "email": str(body["email"]).strip(),
        "username": str(body["username"]).strip(),
        "password": str(body["password"]).strip(),
    }
    users[user_index] = updated
    return updated


@app.delete("/users/{user_id}", response_model=None)
def delete_user(user_id: str) -> Response | JSONResponse:
    uid = parse_user_id(user_id)
    if uid is None:
        return JSONResponse(
            status_code=404, content={"error": "User nao encontrado."}
        )
    user_index = next(
        (i for i, item in enumerate(users) if item["id"] == uid), None
    )
    if user_index is None:
        return JSONResponse(
            status_code=404, content={"error": "User nao encontrado."}
        )

    users.pop(user_index)
    return Response(status_code=204)


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=PORT)
