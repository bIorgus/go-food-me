from fastapi.testclient import TestClient
from main import app

client = TestClient(app)


# def test_read_main():
#     response = client.get("/")
#     assert response.status_code == 200
#     assert response.json() == {"Go": "FoodMe"}


def test_bad_id():
    response = client.get("/api/account/123")
    assert response.status_code == 405
    assert response.json() == {"detail": "Method Not Allowed"}
