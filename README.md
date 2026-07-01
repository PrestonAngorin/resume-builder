# Resume Builder & Checker

A modern full-stack web application that helps users create professional resumes, analyze existing resumes, and optimize them for Applicant Tracking Systems (ATS).

---

## Overview

Resume Builder & Checker allows users to:

- Build professional resumes
- Store multiple resume versions
- Generate PDF resumes
- Upload and analyze existing resumes
- Check ATS compatibility
- Receive AI-powered writing suggestions
- Compare resumes against job descriptions

The project is designed as a portfolio piece that demonstrates full-stack development, database design, REST APIs, document processing, and applied AI.

---

## Features

### MVP

- User authentication
- Resume CRUD
- Live resume editor
- Resume preview
- PDF export
- Resume upload
- Resume parsing
- Resume quality checker
- ATS compatibility checker

### Planned Features

- AI bullet point rewriting
- AI professional summary generation
- AI cover letter generator
- Resume templates
- Resume version history
- Resume sharing
- Interview preparation assistant

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- React Hook Form
- TanStack Query

### Backend

- Python
- FastAPI
- SQLAlchemy
- Alembic
- Pydantic

### Database

- PostgreSQL

### Authentication

- JWT Authentication
- Password Hashing

### Resume Processing

- pdfplumber
- python-docx
- WeasyPrint

### AI (Future)

- Local LLM (≤2B Parameters)
- Embedding-based ATS Matching
- Rule-Based Resume Analysis

---

## Project Structure

```
resume-builder/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── app/
│   ├── tests/
│   ├── alembic/
│   └── requirements.txt
│
├── docs/
│   ├── wireframes/
│   ├── api/
│   └── database/
│
├── README.md
└── LICENSE
```

---

## Architecture

```
React Frontend
       │
REST API
       │
FastAPI Backend
       │
Business Logic
       │
PostgreSQL Database
```

Future AI services will be integrated as separate service modules to keep the architecture modular.

---

## Database

Core entities include:

- Users
- Resumes
- Experience
- Education
- Skills
- Projects
- Certifications

Each resume consists of multiple related records to allow flexible editing and future template support.

---

## Development Roadmap

### Phase 1
- Project Planning
- Wireframes
- Database Design
- Project Setup

### Phase 2
- User Authentication
- Dashboard
- User Profiles

### Phase 3
- Resume Builder
- CRUD Operations
- Live Preview

### Phase 4
- PDF Export
- Resume Templates

### Phase 5
- Resume Upload
- Resume Parsing

### Phase 6
- Resume Analysis
- Resume Scoring
- Recommendation Engine

### Phase 7
- ATS Compatibility Checker

### Phase 8
- AI Resume Assistant

### Phase 9
- Deployment
- Testing
- Documentation

---

## API Endpoints

### Authentication

POST /register

POST /login

GET /me

---

### Resumes

GET /resumes

POST /resumes

GET /resumes/{id}

PUT /resumes/{id}

DELETE /resumes/{id}

---

### Resume Checker

POST /upload

POST /analyze

POST /ats-check

---

## Goals

This project is intended to demonstrate proficiency in:

- Full Stack Development
- REST API Design
- Authentication
- Database Design
- CRUD Applications
- Document Processing
- Natural Language Processing
- Applied AI
- Clean UI/UX
- Cloud Deployment

---

## Future Improvements

- Drag-and-drop section ordering
- Resume version history
- Cloud storage
- AI interview coach
- Resume analytics dashboard
- Multiple export formats
- Team collaboration
- Recruiter dashboard
- Mobile support

---

## License

This project is licensed under the MIT License.

---

## Author

Developed as part of a professional software engineering portfolio to demonstrate modern web development and applied AI engineering skills.