<div align="center">
 
<img alt="zeplin" src="https://cdn.theinnerhour.com/assets/images/AmahaLogo.svg" width="150px" height="150px" />
 
# Roster Management
 
A Roster Management webapp where we can track all therapists' day-to-day workflow 
 
 Look at the live demo of [amaha-roaster-management](https://amaha-roaster.netlify.app/).
 
 
</div>

## Features

- Users can track the entire therapist's workflow, like booking slots, and their scheduled flow.
- Filtering by therapist's name, their availability, and locations
- toggle between list mode and calendar mode of the therapist
- can see all the scheduled slots/meets of the particular therapist

## Run Locally

Clone the project

```bash
  git clone https://github.com/mehulsatardekar/amaha_roster_mgmt.git
```

Go to the project directory

```bash
  cd amaha_roster_mgmt
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

#### Note

This application uses Nextjs (pages) structure.

```bash
  npm run dev
```

## Tech Stack

- **Client:**  Nextjs, Tailwind, flowbite (Tailwind CSS wrapper for fast dev), FullCalendar-React
- **Cloud & Infra:** Netlify . 


### Scope and Future Improvement

Featurs

- Support of adding new events directly on a particular therapist's calendars with CRUD operations
- dark mode features
- user auth for specific user flow, so a particular user can add their respective slot and booking.
