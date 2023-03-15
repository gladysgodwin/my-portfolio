FROM python:3.9-slim-buster

# Set the working directory to /backend
WORKDIR /backend

# Install Flask and other dependencies
RUN pip install flask

COPY requirements.txt /backend/
RUN pip install --no-cache-dir -r requirements.txt

COPY app.py /backend/

EXPOSE 5000

CMD ["python", "app.py"]