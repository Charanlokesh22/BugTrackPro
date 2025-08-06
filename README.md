BugTrack Pro – QA Bug Tracking Tool

BugTrack Pro is a simplified bug tracking system designed for QA teams to log, manage, and resolve software bugs efficiently. This project demonstrates full-stack web development with modular backend and frontend components.

 Features
- Bug reporting with title, description, and reporter name
- View and manage all submitted bugs
- Status tracking (Open, In Progress, Resolved)
- REST API built with Node.js and Express
- MongoDB for persistent bug storage
- Simple HTML frontend for quick bug submission
- CORS-enabled for frontend-backend communication



   Technologies Used
- Backend: Node.js, Express
- Database: MongoDB (via Mongoose)
- Frontend: HTML, JavaScript (Vanilla)
- Version Control: Git
- Tooling: Postman (for API testing)



  How It Works
1. QA users submit a bug using the frontend form.
2. The frontend sends the data to the backend REST API.
3. Backend stores bug details in MongoDB.
4. API endpoints allow retrieving all bugs and updating their status.
5. Future improvements may include role-based login, email alerts, and file uploads.



Prerequisites
- Node.js and npm installed
- MongoDB running locally or remotely



Clone the Repository
git clone https://github.com/Charanlokesh22/bugtrack-pro.git
cd bugtrack-pro


