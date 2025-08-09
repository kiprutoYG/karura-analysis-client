# Karura Forest Deforestation Monitoring Dashboard – Client

This repository contains the **frontend client** for the Karura Forest Deforestation Monitoring Dashboard. The application provides an interactive and data-driven interface to visualize and monitor deforestation trends in Karura Forest. It is built using **Next.js** for performance and scalability, with a clean UI powered by **Tailwind CSS**.

<img width="1908" height="993" alt="image" src="https://github.com/user-attachments/assets/14dae233-fe59-4b9d-9451-dddf6a238ac2" />


---

## Overview

The dashboard allows users to:
- View the latest satellite imagery of Karura Forest as the **base map**.
- View the land use cover in the forest and environs in 2020 vs 2025
- Overlay **deforestation hotspot maps** to identify critical areas.
- Monitor forest cover trends through **graph-based visualizations**.
- Get a summary of the findings in a description paragraph
- Stay informed with **news updates** related to Karura Forest and generally forests conservation.

The client interacts with a backend API (served by Express.js) that provides geospatial layers and analytical data from a PostgreSQL/PostGIS database.

---

## Dashboard Structure

The dashboard is organized into the following key UI components:

### 1. **Map Area**
- **Basemap:** Displays the latest high-resolution satellite imagery of Karura Forest.
- **Deforestation Hotspot Overlay:** Visualizes spatial patterns of recent deforestation.
- Users can toggle overlays to explore different datasets.

### 2. **Graph Card**
- Displays forest cover change trends over time.
- Uses line or bar graphs to show annual or monthly variations in forest area.
- Helps track the rate of deforestation and potential recovery periods.

### 3. **News Card**
- Lists recent updates, policies, and events impacting Karura Forest.
- Pulls information from a curated source or backend feed.
- Keeps stakeholders informed about conservation activities and threats.

---

## Frontend Architecture

The frontend is designed for **modularity, performance, and scalability**:

- **Framework:** [Next.js](https://nextjs.org/) for server-side rendering (SSR) and static site generation (SSG), ensuring fast load times and SEO optimization.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) for utility-first, responsive design.
- **State Management:** Managed locally within components for simplicity; can integrate with global state libraries if needed.
- **API Integration:** Fetches geospatial data, statistics, and news via REST endpoints from the backend.
- **Map Rendering:** Implemented using mapping libraries (e.g., Leaflet or Mapbox) to display interactive geospatial data.

---

## Technologies Used

- **Next.js** – Frontend framework with SSR and routing
- **Tailwind CSS** – Utility-first CSS for styling
- **Leaflet / Mapbox GL JS** – For rendering interactive maps
- **Chart.js / Recharts** – For visualizing forest cover trends
- **REST API Integration** – Communication with the Express.js backend

---

## Project Importance

Karura Forest is an ecologically significant urban forest threatened by human activities. This dashboard empowers stakeholders by:
- Providing **real-time monitoring** of deforestation.
- Enabling **data-driven decision-making** for conservation.
- Increasing **public awareness** through transparent information sharing.

---

## Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn package manager

### Installation
```bash
git clone https://github.com/kiprutoYG/karura-dashboard-client.git
cd karura-dashboard-client
npm install
