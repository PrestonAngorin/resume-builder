import requests

res = requests.post(
    "http://localhost:8000/auth/login",
    json={
        "email": "big.chungus@example.com",
        "password": "Password123!"
    }
) 

print(res.status_code)
print(res.text)