<div align="center">

<img src="https://img.shields.io/badge/🛡️-GigShield-black?style=for-the-badge&labelColor=0a0a0a&color=7c3aed" alt="GigShield" />

# GigShield

### *The AI-Powered Safety Net That Pays When the Streets Don't*

**Parametric Income Insurance for India's Q-Commerce Delivery Partners**

> 📋 **Phase 1 — Ideation & Foundation** | This README is our idea document for the Guidewire DEVTrails 2026 hackathon. It presents our proposed architecture, strategy, and technical design. Code implementation follows in Phases 2 & 3.

<br/>

[![Guidewire DEVTrails 2026](https://img.shields.io/badge/Guidewire-DEVTrails%202026-0ea5e9?style=flat-square&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPjxwYXRoIGQ9Ik0xMiAyTDIgN2wxMCA1IDEwLTV6Ii8+PHBhdGggZD0iTTIgMTdsMTAgNSAxMC01Ii8+PHBhdGggZD0iTTIgMTJsMTAgNSAxMC01Ii8+PC9zdmc+)](https://devtrails.guidewire.com)
[![Phase 1](https://img.shields.io/badge/Phase-1%20Submission-10b981?style=flat-square)]()
[![Persona](https://img.shields.io/badge/Persona-Q--Commerce%20Grocery-f59e0b?style=flat-square)]()
[![License](https://img.shields.io/badge/Team-DevGodz-7c3aed?style=flat-square)]()

---

**`Zero paperwork`** · **`Zero phone calls`** · **`Zero delays`**

*Disruption detected → Claim auto-triggered → ₹ credited to UPI — that's the vision*

</div>

---

## 📑 Table of Contents

- [The Problem — In 30 Seconds](#-the-problem--in-30-seconds)
- [What is GigShield?](#-what-is-gigshield)
- [Meet Arjun — Our User](#-meet-arjun--our-user)
- [How It Works — The GigShield Journey](#-how-it-works--the-gigshield-journey)
- [Weekly Premium Model — Project Kavach](#-weekly-premium-model--project-kavach)
- [Platform Choice — Why Not a Pure PWA?](#-platform-choice--why-not-a-pure-pwa)
- [AI/ML — The Three Brains of GigShield](#-aiml--the-three-brains-of-gigshield)
- [Adversarial Defense & Anti-Spoofing Strategy](#-adversarial-defense--anti-spoofing-strategy)
- [System Architecture — The Blueprint](#-system-architecture--the-blueprint)
- [Tech Stack](#-tech-stack)
- [UI/UX — Designed for the Streets](#-uiux--designed-for-the-streets)
- [Development Roadmap](#-development-roadmap)
- [What Makes Us Different](#-what-makes-us-different)
- [Risks, Assumptions & Future Vision](#-risks-assumptions--future-vision)
- [Built By — Team DevGodz](#-built-by--team-devgodz)

---

## 💥 The Problem — In 30 Seconds

> **It's 2 PM in Chennai. The sky cracks open. 80mm of rain in 3 hours.**
>
> Arjun, a 24 year-old Zepto delivery rider watches the roads flood from under a tea-stall awning. He can't ride. He can't deliver. He can't earn. The Zepto app goes grey: *"Deliveries paused in your area."*
>
> By evening, Arjun has lost **₹1,100**, nearly half his daily wage. Tomorrow, his rent is due. He has no insurance, no safety net, no one to call. He just... absorbs the loss.
>
> **This happens to 7.5 million gig workers across India. Every monsoon. Every heatwave. Every sudden curfew.**
>
> They are the invisible backbone of India's 10-minute economy. And when the world stops them from working, they earn **nothing**.

### The Hard Numbers

| Stat | Reality |
|---|---|
| Gig workers in India | **7.5 million+** delivery partners |
| Income loss during disruptions | **20–30% of monthly earnings** |
| Existing income protection products | **Zero** |
| Average daily loss during Chennai monsoon day | **₹1,100** per rider |
| Recovery mechanism available | **None** — they absorb the loss entirely |

### What GigShield Does NOT Cover

> [!IMPORTANT]
> GigShield strictly **excludes** health insurance, life insurance, accident coverage, and vehicle repair. We insure **one thing only**: the income a delivery partner loses when external disruptions stop them from working.

---

## 🛡️ What is GigShield?

**GigShield** is a proposed AI-powered **parametric insurance platform** designed to automatically detect when external disruptions halt Q-Commerce deliveries and **pay the worker's lost wages directly to their UPI** — without a single form, phone call, or approval chain.

### The Three Promises

| Promise | How We Deliver |
|---|---|
| 🎯 **"I'll protect your income"** | Weekly micro-premiums (₹29–₹79) with automatic coverage for weather, pollution, strikes, and zone closures |
| ⚡ **"I'll pay you instantly"** | Parametric triggers fire automatically; payouts reach UPI in under 30 minutes |
| 🤝 **"I'll never call you a liar"** | Multi-signal Trust Score Engine verifies claims without punishing honest workers |

### Why Parametric?

Traditional insurance: *"Something bad happened? Prove it. Fill forms. Wait 45 days. Maybe we'll pay."*

**Parametric insurance: *"Rain crossed 64.5mm in your zone? You're covered. ₹1,100 sent. Stay safe."***

No claims filing. No adjuster visits. No ambiguity. If the measurable threshold is crossed, the payout is **automatic and guaranteed**.

---

## 👤 Meet Arjun — Our User

<div align="center">

*Every design decision in GigShield is made for Arjun.*

</div>

| | Detail |
|---|---|
| **Name** | Arjun Kumar |
| **Age** | 24 |
| **City** | Chennai (Korattur → Anna Nagar zone) |
| **Platform** | Zepto (Q-Commerce, 10-min grocery delivery) |
| **Daily Earnings** | ₹900–₹1,200 (₹25–₹40/order + surge + milestones) |
| **Weekly Earnings** | ₹5,500–₹7,000 (6-day week) |
| **Device** | Redmi Note 12 (Android, 4G, limited storage) |
| **Vehicle** | Hero Splendor (two-wheeler) |
| **Orders/Day** | 35–45 hyper-local runs |
| **Payment** | UPI weekly settlement from Zepto |
| **Biggest Fear** | *Not illness or accidents — but a sudden thunderstorm that stops him from earning for 4 hours and costs him half his daily wage* |

### Three Days That Changed Arjun's Month

#### 🌧️ Day 1: The Monsoon Hit

> *March 12, 2:14 PM.* Chennai's Korattur zone receives 80mm rainfall in 3 hours. Streets flood ankle-deep. Zepto pauses all dispatches from Arjun's dark store.
>
> **Without GigShield:** Arjun loses ₹1,100. He texts his roommate: *"Rent short this week."*
>
> **With GigShield (proposed flow):** At 2:16 PM, SENTINEL detects IMD Red Alert in Zone 4. At 2:17 PM, AEGIS validates Arjun's location (cell tower match, phone discharging, accelerometer shows sheltering-in-place). At 2:19 PM, **₹1,100 hits Arjun's UPI.** His phone vibrates with a distinct haptic pattern and speaks in Tamil: *"Ungal account-il ₹1,100 transfer aagiyirukkiRathu."*
>
> **Target: disruption to payout in under 5 minutes.**

#### 🌫️ Day 2: The Pollution Spike

> *March 15, 7:30 AM.* AQI hits 420 in Anna Nagar. Zepto flags outdoor delivery pause. Arjun can't ride.
>
> **With GigShield (proposed flow):** CPCB AQI breach + Zepto "No Dispatch" flag triggers a partial payout. **₹950 credited** for the lost morning shift. Arjun uses the time to service his bike instead of stressing about rent.

#### ⛔ Day 3: The Flash Strike

> *March 18, 11:00 AM.* A delivery union calls a flash protest. Three dark stores in Arjun's zone shut down for 4 hours. No pickups possible.
>
> **With GigShield (proposed flow):** News/social disruption feed detects the closure. 30%+ store shutdown in geo-fence confirmed. **₹800 queued and paid** for the affected hours.

---

## 🔄 How It Works — The GigShield Journey

### The Proposed Workflow

```mermaid
flowchart TD
    A["📲 Arjun Installs GigShield\n(~10 MB APK via WhatsApp or Play Store)"] --> B["📋 60-Second Onboarding\n(Phone OTP + Zepto ID + UPI)"]
    B --> C["🤖 AI Risk Profile Generated\n(Zone risk + weather history + delivery patterns)"]
    C --> D["💰 Weekly Premium Quote\n(₹29–₹79 based on risk score)"]
    D --> E["✅ Policy Activated\n(UPI AutoPay every Monday)"]
    E --> F["📡 SENTINEL — Real-Time Monitoring\n(Weather · AQI · News · Platform Status)"]

    F --> G{"⚡ Parametric\nTrigger Detected?"}
    G -->|"No — All Clear"| F
    G -->|"Yes — Disruption!"| H["🔍 AEGIS — Trust Score Engine\n(Multi-signal fraud validation)"]

    H -->|"Score ≥ 0.80 ✅"| I["💳 Auto-Approve\nInstant UPI Payout"]
    H -->|"Score 0.50–0.79 🔍"| J["📸 Soft Review\n(Friendly photo prompt)"]
    H -->|"Score < 0.50 🚫"| K["⏸️ Hold for Ops Review"]
    J -->|"Verified"| I
    I --> L["📊 Dashboard Updated\n'Earnings Protected: ₹1,100'"]
    L --> M["🔄 Next Week Premium Adjusted\n(Learning from this event)"]
```

> [!NOTE]
> **Named Systems:**
> - **SENTINEL** = Real-time disruption monitoring engine (weather + AQI + news + platform feeds)
> - **AEGIS** = Multi-signal Trust Score Engine (fraud detection + claim validation)
> - **KAVACH** = Dynamic premium calculation model (weekly pricing intelligence)

### Proposed Claim Lifecycle — Zero Human Intervention

```mermaid
sequenceDiagram
    participant IMD as 🌧️ IMD Weather API
    participant S as 🛡️ SENTINEL Monitor
    participant DB as 🗄️ PostGIS Database
    participant A as 🔍 AEGIS Fraud Engine
    participant K as 💰 KAVACH Premium Engine
    participant R as 💳 Razorpay (UPI)
    participant SSE as 📡 SSE Push
    participant W as 👤 Arjun (Worker)

    IMD->>S: Red Alert issued — Chennai Zone 4
    S->>DB: ST_Contains query — find active policyholders in Zone 4
    DB-->>S: 847 workers matched via spatial index
    S->>A: Validate Arjun — location + sensor + network signals
    A->>DB: Fetch historical route data + device fingerprint
    A->>A: Trust Score = 0.91 (cell tower ✓, accelerometer ✓, battery draining ✓)
    A-->>S: APPROVED — genuine disruption
    S->>R: Initiate ₹1,100 payout → Arjun's UPI
    R-->>S: Payment confirmed ✅
    S->>SSE: Push payout notification
    SSE-->>W: ₹1,100 credited + haptic buzz + voice: "Aapke account mein ₹1,100 transfer ho gaye hain"
    S->>K: Log event → adjust next week's Zone 4 risk score
    S->>DB: Write audit trail — trigger, score, payout, decision rationale
```

---

## 💸 Weekly Premium Model — Project KAVACH

> *Named after the Hindi word for "armor" — because that's what a good premium model should feel like.*

### Why Weekly? Because Arjun Earns Weekly.

Monthly premiums don't work for gig workers. They live paycheck to paycheck — or rather, **payout to payout**. Zepto settles weekly. Arjun budgets weekly. His insurance must work the same way.

| Weekly Advantage | Why It Matters |
|---|---|
| **Matches earnings cycle** | Premium auto-deducted on Monday, aligned with Zepto's payout day |
| **Micro-sized, macro-impact** | ₹29–₹79/week feels trivial — less than the cost of two chai breaks |
| **Low lapse risk** | Auto-renew weekly; no annual renewal friction |
| **Dynamic adjustment** | Premium adapts every week based on forecast risk — not locked for 12 months |

### The Three Plans

| Plan | Weekly Premium | Max Payout/Week | Coverage Hours | Best For |
|------|:---:|:---:|:---:|---|
| 🥉 **Lite** | ₹29 | ₹400 | Up to 3 hrs | Part-timers (3–4 days/week) |
| 🥈 **Standard** | ₹49 | ₹750 | Up to 5 hrs | Full-timers (6 days/week) |
| 🥇 **Pro** | ₹79 | ₹1,200 | Up to 8 hrs | High-earners in high-risk zones |

### How KAVACH Calculates Your Premium

```
Weekly Premium = Base Rate × Zone Risk × Worker Adjustment × Forecast Factor
```

| Component | What It Learns From | Range |
|---|---|---|
| **Base Rate** | Plan tier (Lite/Standard/Pro) | ₹29 / ₹49 / ₹79 |
| **Zone Risk Multiplier** | Historical flood, heat, AQI data for the worker's operating zone | 0.7× (safe) → 1.6× (flood-prone) |
| **Worker Adjustment** | Tenure, clean-claim history, reliability signals | 0.85× (trusted veteran) → 1.15× (new joiner) |
| **Forecast Factor** | ML-predicted disruption probability for the upcoming 7 days | 1.0× (clear skies) → 1.4× (monsoon incoming) |

#### Arjun's Premium in Three Scenarios

| Week Context | Calculation | Arjun Pays |
|---|---|---|
| ☀️ Clear week, safe zone, 12-week clean history | ₹49 × 0.9 × 0.85 × 1.0 | **₹37** |
| 🌦️ Normal week, moderate zone | ₹49 × 1.0 × 0.95 × 1.0 | **₹47** |
| 🌧️ Monsoon forecast, flood-prone zone | ₹49 × 1.4 × 0.95 × 1.3 | **₹85** *(auto-upgraded to Pro coverage cap)* |

### Parametric Triggers — What Fires a Claim

Every trigger must be **measurable, verifiable, and geo-fenced** to the worker's registered delivery zone. No subjective judgment — if the threshold crosses, the system pays.

| Trigger | Source | Threshold | Payout % |
|---|---|---|:---:|
| 🌧️ Heavy Rain | IMD API + OpenWeatherMap | ≥ 64.5mm/24hr (IMD "Heavy" classification) | 100% |
| 🌧️🔴 Extremely Heavy Rain / Red Alert | IMD API | ≥ 204.5mm/24hr OR IMD Red Alert issued | 100% |
| 🌊 Waterlogging / Flood | NDMA Alerts (mock) | Zone flagged as flooded | 100% |
| 🔥 Extreme Heat | IMD API | > 44°C + heat advisory | 75% |
| 🌫️ Severe Pollution | CPCB AQI API | AQI ≥ 401 (CPCB "Severe" category) | 50% |
| 🚫 Curfew / Hartal | News NLP + Govt. feeds (mock) | Verified curfew/strike in zone | 100% |
| 🏪 Zone / Dark-Store Closure | Platform API (simulated) | > 30% store closures OR "No Dispatch" > 3h | 80% |

**Payout formula:**
```
Payout = Hours Lost × ₹150/hr (estimated hourly wage) × Payout% — capped at plan ceiling
```

```mermaid
flowchart LR
    subgraph "📥 Inputs"
        A["Worker Profile\n(Zone · Tenure · History)"]
        B["Weather Forecast\n(7-day IMD + OpenWeatherMap)"]
        C["Platform Activity\n(Zepto zone data)"]
    end

    subgraph "🧠 KAVACH Engine"
        D["XGBoost Regressor\n(Retrained every Sunday night)"]
    end

    subgraph "📤 Output"
        E["Personalized Premium\n₹29–₹79/week"]
    end

    A --> D
    B --> D
    C --> D
    D --> E
```

---

## 📱 Platform Choice — Why Not a Pure PWA?

> *We asked ourselves: "Would Arjun install a 70MB app from the Play Store while on a delivery break?" The answer was no. But then we asked: "Can a browser read cell tower IDs and run background sensors?" The answer was also no.*

**Chosen: Capacitor-Wrapped PWA** (web-first architecture with a lightweight native shell) for workers + **React + Recharts Web Dashboard** (with Tailwind CSS + shadcn/ui) for admin/ops.

### The Problem with a Pure PWA

Our AEGIS anti-spoofing engine relies on **native mobile device signals** — cell tower IDs, Wi-Fi network scans, background motion data, and battery drain patterns. Modern browsers **sandbox all of this** for privacy:

| Signal AEGIS Needs | Browser Access? | Why It's Blocked |
|---|:---:|---|
| Cell tower IDs | ❌ | No web API exists — requires Android's `TelephonyManager` |
| Wi-Fi network scanning | ❌ | No web API — requires Android's `WifiManager` |
| Background motion sensors | ⚠️ Foreground only | `DeviceMotionEvent` stops when user switches apps |
| Battery drain rate & charge state | ⚠️ Limited | `navigator.getBattery()` gives basic level/charging but not drain patterns over time |
| GPS accuracy metadata | ⚠️ Partial | `Geolocation API` provides coords but not satellite geometry (HDOP) |

A pure PWA would leave AEGIS blind to the most critical fraud signals. **Without cell tower and network data, the 500-user syndicate wins.**

### The Solution: Capacitor-Wrapped PWA

[Capacitor](https://capacitorjs.com/) wraps our React + Vite web app in a thin native shell, giving us the **best of both worlds**:

| Factor | Benefit |
|---|---|
| 📦 **Lightweight install** | ~8–10 MB APK vs. 60–80 MB for a full native app. Fits on budget 32 GB phones. |
| 🔌 **Native device access** | Capacitor plugins for motion sensors, battery status, network info, and device identity — AEGIS gets every signal it needs |
| 📲 **WhatsApp distribution** | APK shareable via WhatsApp or QR codes at dark-store walls. Play Store listing optional. |
| 📴 **Background execution** | Native background tasks allow continuous device data collection during active delivery shifts |
| 🔔 **Real-time alerts** | Server-Sent Events (SSE) for instant payout and disruption notifications + Firebase Cloud Messaging (FCM) for background push when app is closed |
| 💳 **UPI deep links** | Native intent system for seamless UPI payment flows |
| 💻 **One codebase** | 95% of UI is still React + Vite (web tech) with Tailwind CSS + shadcn/ui. Only sensor access layer uses native plugins. Fast hackathon iteration. |
| 🌐 **Offline-first** | TanStack Query persistence + Capacitor's native storage + service workers cache policy status, claim history, and last-known alerts |

> [!IMPORTANT]
> **Why not React Native?** React Native would also work, but Capacitor lets us keep our existing React + Vite web codebase and add native capabilities incrementally. For a hackathon, this is faster to ship while still giving AEGIS the native device access it needs.

**Admin Dashboard:** A full React web dashboard (Tailwind CSS + shadcn/ui + Recharts) for insurer ops teams to monitor policies, review SSE-fed live claims, track loss ratios, and observe risk heatmaps. No native wrapper needed — admins work on desktops.

---

## 🧠 AI/ML — The Three Brains of GigShield

GigShield doesn't use "AI" as a buzzword. We are designing **three distinct ML systems** — each with a clear job, clear inputs, and clear outputs. Rule-based where determinism matters. ML where pattern recognition is needed. Implementation follows in Phases 2 & 3.

### The Intelligence Map

```mermaid
flowchart TD
    subgraph "🌐 Data Sources"
        D1["IMD / OpenWeatherMap\n☁️ Weather"]
        D2["CPCB\n🌫️ AQI"]
        D3["NDMA\n🌊 Flood Alerts"]
        D4["Platform API\n📦 Zepto Status"]
        D5["Device Signals\n📱 GPS · Sensors · Battery"]
        D6["News Feed\n📰 Strikes · Curfews"]
    end

    subgraph "🧠 Brain 1: KAVACH — Premium Intelligence"
        M1["XGBoost Regressor\nLearns: zone risk × forecast × worker behavior\nOutput: ₹/week"]
    end

    subgraph "⚡ Brain 2: SENTINEL — Trigger Detection"
        M2["Deterministic Rule Engine\nIf threshold crossed → fire trigger\nNo ML ambiguity — auditable & predictable"]
    end

    subgraph "🔍 Brain 3: AEGIS — Fraud Detection"
        M3["Isolation Forest + DBSCAN Clustering\nLearns: what genuine vs spoofed looks like\nOutput: Trust Score 0–1"]
    end

    subgraph "💾 Spatial Data"
        PG["PostGIS\nRoute History · Geofences"]
    end

    D1 & D2 & D5 --> M1
    D1 & D2 & D3 & D6 --> M2
    D4 & D5 & PG --> M3
```

### What's Intelligent vs. What's Rule-Based

| Function | Approach | Why This Choice |
|---|---|---|
| **KAVACH** — Premium Pricing | ✨ **ML** (XGBoost) | Non-linear interactions between zone risk, weather, seasonality, and worker behavior. Rules can't capture this. |
| **SENTINEL** — Trigger Detection | 📏 **Rule Engine** | Parametric triggers *must* be transparent and auditable. "Rain ≥ 64.5mm/24hr → pay." No black-box ambiguity. |
| **AEGIS** — Fraud Scoring | 🔀 **Hybrid** (ML + Rules) | Anomaly detection needs ML to catch novel spoofing patterns. Rules provide guardrails and explainability. |
| **Ring Detection** | 🔗 **Density Clustering** (DBSCAN) + Social Graph Heuristics | Coordinated fraud requires spatial-temporal clustering and relationship-aware analysis — individual claim scoring can't see the network. |
| **Liquidity Forecasting** | 📈 **Time-Series ML** (Prophet) | Predicts next-week payout exposure based on seasonal patterns so the pool is never caught underfunded. |

### Model Deep Dives

#### 🧠 KAVACH — Dynamic Premium Calculation
- **Model:** XGBoost Regressor
- **Features:** Zone flood/heat history, seasonal risk index, 7-day weather forecast, worker tenure, prior claim ratio
- **Output:** Worker-specific weekly premium within plan band
- **Retraining cadence:** Every Sunday night on the latest week's weather + claim data
- **Key insight:** Workers in historically safe zones with clean records get rewarded with lower premiums — creating a positive feedback loop that encourages honesty

#### 🔍 AEGIS — Fraud Detection Engine
- **Layer 1 — Isolation Forest:** Detects point-in-time behavioral anomalies at claim moment (location, sensor telemetry, timing patterns). Chosen for its efficiency on high-dimensional data with no labeled fraud examples (unsupervised)
- **Layer 2 — LSTM (Target Architecture):** Analyses the worker's movement trajectory over 7 days to flag sudden location inconsistencies. Initially implemented as statistical feature comparison (mean/variance of GPS accuracy, speed, and zone dwell time vs. historical baseline) — upgraded to LSTM in Phase 3 as training data accumulates
- **Layer 3 — DBSCAN Spatial-Temporal Clustering:** Groups simultaneous claims by geographic proximity and temporal density to detect coordinated rings. Leverages PostGIS `ST_DWithin` for geospatial proximity queries with spatial indexes, replacing application-level Haversine computation
- **Output:** Trust Score (0–1); score ≥ 0.80 auto-approves, 0.50–0.79 triggers soft review, < 0.50 routes to ops
- **Active learning:** Every confirmed fraud case feeds back into the model weekly; every false positive refines the scoring weights

#### 📈 Liquidity Shield — Prophet (Phase 3)
- **Purpose:** Prevent pool exhaustion during mass-disruption weeks
- **Model:** Facebook Prophet — designed for time-series data with strong seasonal components (monsoon cycles, festival-season strikes). Initially bootstrapped with a rule-based reserve model (30% buffer over rolling 4-week average claims) in Phase 2; upgraded to Prophet in Phase 3 as claim history accumulates
- **Input:** Historical payout data + upcoming weather forecasts + seasonal disruption patterns
- **Output:** "Next week, expect ₹2.3L in total claims across Chennai. Reserve ₹3.0L to maintain a 30% buffer."
- **Why it matters:** A smart system that pays claims but goes bankrupt isn't smart. Predictive reserve management ensures we always have the funds to honor every legitimate claim.

---

## 🚨 Adversarial Defense & Anti-Spoofing Strategy

> **🔴 THE THREAT:** On March 19, 2026, a simulated alpha environment report confirmed that a syndicate of **500 delivery workers** organized via Telegram groups used advanced GPS-spoofing apps to **fake their locations inside Red Alert weather zones while resting at home**. They triggered mass false payouts and **drained the entire liquidity pool** of a beta parametric insurance platform.
>
> **Simple GPS verification is officially dead. GigShield was built for this exact war.**

---

### A. The Differentiation — Genuine Worker vs. Bad Actor

The core insight that powers GigShield's defense:

> **Spoofing apps can fake your GPS coordinates. They cannot fake the laws of physics.**

A spoofer can tell the system "I'm at 13.08° N, 80.27° E — right in the flood zone." But they can't fake:
- The way a phone's accelerometer vibrates on a bike idling in rain
- The way battery drains when GPS + screen + rain-soaked navigation are running
- The way cell towers change when you're actually outdoors
- The absence of their home Wi-Fi when they claim to be 12 km away

**AEGIS cross-references claimed location against physical reality across 7 independent signal layers:**

| Signal Layer | 🟢 Genuine (Arjun in a storm) | 🔴 Spoofer (Raj at home) |
|---|---|---|
| **Cell Tower ID** | Matches GPS zone tower | Mismatches — home tower, not flood-zone tower |
| **GPS Accuracy** | Degraded precision — storms disrupt satellite signals, GPS jumps around | Suspiciously stable & precise — spoofing apps fake a clean GPS fix |
| **Motion Sensors** | Accelerometer shows micro-vibrations (sheltering, walking, bike idle); gyroscope shows natural orientation shifts | Phone is stationary on a desk — flat motion profile, no orientation change |
| **Nearby Wi-Fi Networks** | Detects public/commercial SSIDs or no Wi-Fi at all (outdoor) | Detects worker's home Wi-Fi network — same SSID they connect to every night |
| **Battery Behavior** | Draining rapidly (active GPS + screen + navigation = heavy power draw) | Charging or draining slowly (phone idle at home, spoofing uses minimal power) |
| **Network Quality** | Signal drops, high latency, cell tower handovers — typical of bad weather | Stable 4G, zero drops — typical of indoor home use |
| **Platform App Status** | Zepto app online, 0 orders (platform paused deliveries) | Zepto app offline or no login for hours — wasn't working when storm hit |

**The Trust Score:**

All 7 signals feed a weighted ensemble producing a **Trust Score (0 to 1)**:

```
┌─────────────────────────────────────────────────────────────┐
│  Trust Score ≥ 0.80  →  ✅ AUTO-APPROVE  →  Instant payout │
│  Trust Score 0.50–0.79 → 🔍 SOFT REVIEW → Photo/selfie ask │
│  Trust Score < 0.50  →  🚫 HOLD         →  Ops review      │
└─────────────────────────────────────────────────────────────┘
```

> [!TIP]
> **The Inverted GPS Trick:** Most fraud systems treat missing/degraded GPS as suspicious. AEGIS does the opposite — during a **confirmed storm event**, degraded GPS is treated as a **positive indicator**. Because real storms degrade satellite signals, while spoofing apps produce suspiciously *perfect* coordinates. This single design decision makes GigShield harder to game than any system that trusts clean GPS.

---

### B. The Data — What We Analyze Beyond GPS

GPS is just one of many signals. AEGIS ingests **7 evidence categories** that spoofing apps fundamentally cannot fake:

| Category | What the App Collects | Why Spoofers Can't Fake It |
|---|---|---|
| **📱 Motion Sensors** | Accelerometer & gyroscope data (via Capacitor plugin) | A phone on a desk has zero motion. A phone on a bike in rain has vibrations, tilts, and orientation shifts. Spoofing apps can't simulate this. |
| **🔋 Battery Behavior** | Drain rate, charge state (via Capacitor Battery plugin) | Active GPS + screen + navigation drains battery fast. A phone spoofing at home is often charging or barely draining. |
| **📶 Network Environment** | Nearby Wi-Fi SSIDs, cell tower IDs, signal strength (via native APIs) | If 50 "stranded" workers are all connected to the same home Wi-Fi network, they're in one room — not outdoors in a storm. |
| **🌐 Connectivity Quality** | Signal stability, latency patterns, network drops | Real storms cause signal chaos and tower handovers. Spoofing from home shows stable 4G with zero interruptions. |
| **🗺️ Route History** | Historical delivery GPS traces stored server-side | Worker claiming disruption in a zone they've never once delivered in = 🚩 |
| **🌧️ Weather Cross-Ref** | Real-time weather API data at claimed coordinates | If there's no weather event at the claimed location, the claim is physically impossible. Server-side check. |
| **📦 Platform Activity** | Zepto order-attempt logs, app usage data, last active | Workers offline since 9 AM can't be "stranded mid-delivery" at 2 PM. Server-side cross-check. |

---

### C. The Detection Logic — Catching Coordinated Fraud Rings

> Individual spoofing is amateur hour. The real threat is **500 accounts acting in concert** via Telegram — filing claims simultaneously from the same living room. That's what AEGIS was designed to destroy.

```mermaid
flowchart TD
    A["🚨 ALERT: 150 claims filed\nin 8 minutes — Chennai Zone 4"] --> B["🔍 Ring Detection Algorithm\n(AEGIS Layer 3)"]

    B --> C["⏱️ TEMPORAL ANALYSIS\nLegit workers trickle in over 30–60 min.\n150 in 8 min = 99.8th percentile anomaly."]
    B --> D["📍 GPS QUANTIZATION CHECK\nSpoofing apps produce exact decimals\n(13.082700°). Real storm GPS\nfluctuates across 3–4 decimal places."]
    B --> E["👥 SOCIAL GRAPH SCAN\nContact-book overlap? Batch-registered\nin same 24h window? Shared UPI\npayout accounts? Soft-linked."]
    B --> F["📱 PLATFORM CROSS-CHECK\nZepto API says these workers were\nOFFLINE before the alert.\nCan't be stranded if you weren't working."]

    C & D & E & F --> G{"🔗 Ring Confidence\n> 0.70?"}
    G -->|"YES"| H["🛑 FREEZE all cluster claims.\nAlert ops team immediately.\nLegit individuals triaged\nand paid within 4 hours."]
    G -->|"NO"| I["Process each claim individually\nthrough Trust Score Engine"]
```

**The Four Pillars of Ring Detection:**

1. **⏱️ Temporal Clustering (DBSCAN)** — 500 real workers notice a storm over 30–60 minutes. A Telegram-coordinated ring files 150 claims in under 2 minutes. That's a statistical impossibility in organic behavior.

2. **📍 GPS Quantization** — Spoofing apps generate suspiciously round coordinates (13.082700° N exact). Real GPS under storm conditions produces noisy, fluctuating values: 13.08271° → 13.08268° → 13.08274°. The precision *pattern* betrays the spoofer.

3. **👥 Social Graph** — Devices sharing contact-book overlaps, linked UPI accounts, or accounts created in the same 24-hour registration window are soft-linked. When a cluster of soft-linked accounts all claim simultaneously, it's a **hard ring signal**.

4. **📦 Platform Mismatch** — If Zepto's API shows a worker was offline (no login, no order attempts) before the weather alert, they weren't working. You can't be "stranded mid-delivery" if you never started delivering.

---

### D. The UX Balance — Never Punish Arjun for Raj's Crime

> *"The mark of a great fraud system isn't how many fraudsters it catches. It's how few honest workers it hurts."*

The system **never** shows a "Fraud Detected" error. Even when flagging, the worker sees friendly, non-accusatory language.

```mermaid
stateDiagram-v2
    [*] --> AutoApproved : Trust Score ≥ 0.80
    [*] --> SoftReview : Score 0.50–0.79
    [*] --> HardReview : Score < 0.50
    [*] --> RingHold : Ring pattern detected

    SoftReview --> AutoApproved : Photo sent OR\ncell tower confirmed (6h window)
    SoftReview --> HardReview : No response in 6 hrs

    RingHold --> AutoApproved : Ops clears individual
    RingHold --> HardReview : Ops escalates

    HardReview --> AutoApproved : Human confirms legitimate
    HardReview --> Rejected : Fraud confirmed

    AutoApproved --> Paid : ₹ UPI payout released
    Rejected --> Flagged : Account suspended + premium paused
```

**Six Safeguards for Honest Workers:**

| Safeguard | How It Works |
|---|---|
| 📸 **Soft review, not hard block** | Score 0.50–0.79? Arjun gets a friendly push: *"Hi Arjun — we're verifying quickly. Send a photo of where you are?"* He has 6 hours. |
| 🗺️ **Zone-level confidence boost** | If 70%+ of workers in Zone 4 are auto-approved (real event confirmed), remaining flagged workers get a trust score uplift. The zone vouches for its people. |
| 📶 **Network Drop Exception** | In areas with historically poor connectivity, sensor signals (accelerometer, battery) are weighted higher than GPS. GPS glitches first in bad weather — the phone's accelerometer still detects Arjun walking his bike through a puddle. |
| 💰 **80% immediate payout** | Even soft-flagged workers receive 80% of payout immediately. The remaining 20% is released after verification. Arjun isn't left waiting for dinner money. |
| ✅ **Trusted Worker status** | 8+ weeks of clean history → raised trust score floor (minimum 0.60). Long-term honest riders are rewarded with fewer false flags. |
| 🗣️ **48-hour appeal window** | Any rejection can be appealed with a voice note or photo, reviewed by a human ops agent within 24 hours. Arjun always gets a second chance. |

---

### E. System Resilience — Surviving the Worst-Case Attack

| Threat Scenario | GigShield's Response |
|---|---|
| **💣 500+ simultaneous spoofed claims** | Ring Detection freezes the cluster in seconds. Legitimate individuals triaged and paid within 4 hours. |
| **💸 Liquidity pool drain attempt** | Prophet-based forecasting pre-allocates reserves. Ring-held payouts aren't released until verified — protecting the pool. |
| **🧬 Evolving spoofing techniques** | Active learning pipeline: every confirmed fraud case retrains the model weekly. New spoofing tools are detected faster over time. |
| **📱 Telegram-coordinated group attacks** | Social graph analysis links accounts by contact overlap, batch registration, and shared UPI history. |
| **🤖 Bot-generated fake accounts** | Device fingerprinting + CAPTCHA at registration + behavioral analysis during onboarding detect non-human patterns. |
| **🔄 Asymmetric scale attack** | Trust Score Engine and Ring Detection run as stateless, horizontally-scalable microservices. 10,000 claims process identically to 100. No degradation under adversarial load. |

> [!CAUTION]
> **The Core Principle:** GigShield is designed to be **strict with organized fraud but humane with stranded workers**. A fraud ring trying to drain ₹5L from the pool will be frozen instantly. Arjun stuck in a storm with a glitchy GPS will still get paid — because the system understands that imperfect data during real disruptions is *expected*, not suspicious.

---

## 🏗️ System Architecture — The Blueprint

```mermaid
flowchart LR
    subgraph "👥 Client Layer"
        U["📱 Worker App\n(React + Vite + Capacitor\n+ TanStack Query)"]
        D["🖥️ Admin Dashboard\n(React + Recharts)"]
    end

    subgraph "🔀 API Gateway"
        API["⚡ FastAPI\n(Python · Async · SSE)"]
    end

    subgraph "🧩 Core Services"
        P["👤 Profile\nService"]
        KV["💰 KAVACH\nPremium Engine"]
        SN["📡 SENTINEL\nTrigger Monitor"]
        CL["📋 Claims\nService"]
        AE["🔍 AEGIS\nFraud Engine"]
        PY["💳 Payout\nService"]
    end

    subgraph "🌐 External Feeds"
        W["🌧️ IMD +\nOpenWeatherMap"]
        AQ["🌫️ CPCB\nAQI API"]
        ND["🌊 NDMA\nFlood Alerts"]
        PL["📦 Zepto\nStatus (Mock)"]
        NW["📰 News\nFeed (Mock)"]
    end

    subgraph "💾 Data Layer"
        DB[("🗄️ PostgreSQL + PostGIS\nUsers · Policies · Claims\n+ Spatial Indexes")]
        RD[("⚡ Redis\nTrigger Cache · Sessions")]
        FS["📊 Feature Store\nML Training Data"]
    end

    subgraph "💳 Payments"
        RZ["🏦 Razorpay Sandbox\nUPI Test Mode"]
    end

    subgraph "📡 Real-Time Layer"
        SSE["📡 SSE Push\n(Trigger Alerts · Payouts)"]
    end

    U --> API
    D --> API
    API --> P & KV & SN & CL & AE & PY
    API --> SSE
    SSE -.->|"Push Events"| U & D
    SN --> W & AQ & ND & PL & NW
    AE --> FS
    PY --> RZ
    P & KV & CL & AE --> DB
    SN --> RD
```

### Design Principles

| Principle | How We Apply It |
|---|---|
| 🎯 **Separation of intelligence** | Rule-based triggers (SENTINEL) are kept separate from ML-based scoring (AEGIS/KAVACH). Auditable where it matters, intelligent where it helps. |
| 🧱 **Modular services** | Each function (premium, trigger, fraud, payout) is an independent service. Teams can work in parallel. One service failing doesn't crash the system. |
| 📡 **Event-driven with SSE** | SENTINEL monitors external APIs and fires Server-Sent Events on threshold breaches. Workers and admins receive real-time push without polling. |
| 🔧 **Mock-first development** | All external APIs use free-tier or mock sources in Phases 1–2. Swappable for production integrations later. |
| 📈 **Horizontal scalability** | Stateless services behind FastAPI. Redis handles ephemeral state. Celery workers handle async tasks. PostGIS spatial indexes handle geo-queries at scale. |
| 🔍 **Audit-first observability** | Every trigger decision, trust score computation, and payout event is logged with full context as structured JSON. Enables regulatory compliance and post-mortem analysis. |

---

## 🛠️ Tech Stack

| Layer | Technology | Why This Choice |
|:---:|---|---|
| **Frontend (Worker)** | React 18 + Vite + Capacitor + TanStack Query + Tailwind CSS + shadcn/ui | Web-first UI with native shell for sensor access. TanStack Query handles offline caching & retries on degraded networks. ~8–10 MB APK. |
| **Frontend (Admin)** | React 18 + Vite + TanStack Query + Tailwind CSS + shadcn/ui + Recharts | Full dashboard with charts, heatmaps, and review queues. Same design system as worker app. |
| **Backend** | FastAPI (Python · Async) + SSE | Async, high-performance, native ML integration. SSE for real-time push (payout alerts, trigger notifications). |
| **ML/AI** | scikit-learn · XGBoost · Isolation Forest · DBSCAN · Joblib · Prophet (Phase 3) | XGBoost for premium pricing; Isolation Forest for anomaly detection; DBSCAN for ring clustering; Prophet for liquidity forecasting; Joblib for model serialization. |
| **Task Queue** | Celery + Redis | Async trigger monitoring, batch scoring, and retraining jobs |
| **Database** | PostgreSQL + PostGIS | Relational + spatial: users, policies, claims, payouts, and geospatial zone matching via spatial indexes |
| **Cache** | Redis | Trigger state, sessions, rate limiting, SSE connection tracking |
| **Auth** | Firebase Auth (Phone OTP) | Zero-friction phone-based login for gig workers |
| **Payments** | Razorpay Sandbox (UPI test) | Simulated UPI payouts; production-ready SDK |
| **Weather** | IMD API + OpenWeatherMap | Primary + fallback weather feeds with Redis-cached failover |
| **AQI** | CPCB API / WAQI | Real-time pollution data for trigger detection |
| **Geo** | OpenStreetMap + Leaflet | Zone definition, risk heatmaps, and geo-fence visualization |
| **Observability** | Structured JSON logging + Claim audit trail | Every trigger, score, and payout decision logged with full context |
| **Deployment** | Docker + Render | Containerized services; free-tier cloud for hackathon |
| **VCS** | GitHub | Monorepo, all phases |

---

## 📅 Development Roadmap

```mermaid
gantt
    title GigShield — 6-Week Execution Plan
    dateFormat YYYY-MM-DD

    section Phase 1 — Ideation & Foundation
    Persona Research & Scoping          :done, p1a, 2026-03-04, 7d
    README + Architecture Design        :done, p1b, 2026-03-11, 5d
    Adversarial Defense Strategy        :done, p1c, 2026-03-16, 4d
    DB Schema & API Skeleton            :done, p1d, 2026-03-15, 5d

    section Phase 2 — Automation & Protection
    Onboarding & Auth (KYC Mock)        :p2a, 2026-03-21, 5d
    Weekly Policy & KAVACH Engine       :p2b, 2026-03-24, 5d
    SENTINEL + Weather API Integration  :p2c, 2026-03-28, 5d
    Claims Management & Auto-Trigger    :p2d, 2026-04-01, 4d

    section Phase 3 — Scale & Optimize
    AEGIS Fraud Detection - Isolation Forest   :p3a, 2026-04-05, 3d
    AEGIS Ring Detection - DBSCAN Clustering    :p3a2, 2026-04-08, 3d
    Market Shift Defense Testing                :p3a3, 2026-04-10, 2d
    Payout Integration (Razorpay)               :p3b, 2026-04-07, 4d
    Worker & Admin Dashboards                   :p3c, 2026-04-10, 5d
    Final Testing & Demo Video                  :p3d, 2026-04-15, 3d
```

| Phase | Key Outcomes |
|---|---|
| **Phase 1** | ✅ This README · GitHub repo · 2-min strategy video |
| **Phase 2** | Registration · policy engine · KAVACH · SENTINEL triggers · claims flow · 2-min demo |
| **Phase 3** | AEGIS fraud detection (Isolation Forest + DBSCAN ring detection + Market Shift defense) · simulated payouts · dashboards · 5-min demo · pitch deck |

---

## 🏅 What Makes Us Different

| Differentiator | Why It Matters to Judges |
|---|---|
| 🎯 **Q-Commerce-only focus** | Not a generic gig platform. Tailored for the unique risk profile of 10-minute grocery delivery — higher frequency, smaller radius, more weather-sensitive. |
| 🧠 **Named, separated AI systems** | KAVACH / SENTINEL / AEGIS aren't buzzwords — they're distinct models with distinct jobs, distinct inputs, and distinct outputs. We know exactly what each brain does. |
| 🔄 **Inverted GPS logic** | Everyone else treats bad GPS as fraud. We treat bad GPS during a *confirmed storm* as proof of genuine disruption. Counterintuitive, correct, and nearly impossible to game. |
| 🕸️ **Ring-level, not individual-level fraud detection** | Most systems catch one spoofer. We catch the *entire Telegram group* — 500 accounts at once — using social graph analysis and temporal clustering. |
| 🤝 **Worker-humane UX** | 80% immediate payout on soft flags. Zone-level boosts. Network drop exceptions. Appeal windows. The system is strict on fraud *and* kind to honest workers. |
| ⚡ **5-minute payout** | Disruption detected → Trust Score computed → ₹ in UPI. Under 5 minutes for auto-approved claims. No other parametric platform promises this. |
| 📊 **Predictive liquidity** | Prophet forecasts next week's claim exposure so the payout pool is never caught underfunded — even during mass-disruption events. |
| 🌧️ **Built for the Streets** | High-contrast Sunlight Mode, 60px wet-finger touch targets, traffic-light glance UI, and vernacular voice alerts in Hindi/Tamil. Designed for a Redmi on a Hero Splendor, not a MacBook in an office. |

---

## 🎨 UI/UX — Designed for the Streets

> *GigShield isn't designed for a Figma review on a MacBook. It's designed for a Redmi Note 12 strapped to a Hero Splendor in a Chennai monsoon.*

### Physical-Environment Adaptations

Every UI decision is stress-tested against Arjun's reality: wet screens, direct sunlight, degraded connectivity, and zero attention span.

| Feature | What It Does | Why It Matters |
|---|---|---|
| ☀️ **Sunlight Mode** | Ultra-high-contrast theme — pure white background, heavy-weight black text, hyper-saturated accents. Auto-activates via ambient light sensor or manual toggle. | Dark mode is unreadable on a budget phone under the Indian sun. Sunlight Mode is the default daytime experience. |
| 🌧️ **Wet-Finger Touch Targets** | Every interactive element is minimum 60px tall. No small text links. No tiny close buttons. All CTAs are full-width, chunky, tap-friendly blocks. | When it rains — the exact moment GigShield fires — Arjun's screen is wet. Large targets eliminate mis-taps. |
| 🚦 **Traffic-Light Glance UI** | The home screen communicates state through color before text: 🟢 Safe · 🟠 Alert Incoming · 🔵 Payout Processing · 🔴 Action Needed. | Arjun can't read a paragraph at a red light. Color-first design conveys status in under 1 second. |
| 🗣️ **Vernacular Voice Alerts** | On payout credit, the app fires a distinct haptic vibration pattern (Capacitor Haptics) and speaks in Hindi/Tamil: *"Aapke account mein ₹1,100 transfer ho gaye hain."* | A push notification can be missed. A spoken confirmation in the worker's own language builds visceral trust. |
| 📴 **Offline-First Resilience** | TanStack Query persistence + Capacitor native storage caches policy status, claim history, and last-known alerts. | During a storm, network dies first. The app must show coverage status even with zero connectivity. |

### 📱 Worker App — Arjun's View

| Screen | Key Elements |
|---|---|
| **🏠 Home** | Coverage status badge · current week premium · earnings protected this month · live weather alert card |
| **📊 Risk Forecast** | Zone risk meter · 7-day disruption forecast · "premium may adjust next week" notice |
| **📋 Claim Timeline** | Vertical timeline: trigger detected → verification in progress → payout sent → complete |
| **✅ Trust Status** | "Verified Worker" badge · clean-history streak · trust tier indicator (no raw scores shown) |
| **📸 Soft Review** | Friendly wording · photo upload with camera shortcut · location confirmation · zero accusatory language |

### 🖥️ Admin Dashboard — Ops Control Room

| Panel | What It Shows |
|---|---|
| 📊 **Policy Overview** | Weekly activations, renewals, and lapse rates (Recharts line + bar) |
| 📉 **Loss Ratio** | Current week vs. 4-week rolling average (donut + trend line) |
| 🗺️ **Risk Heatmap** | Leaflet-powered geographic visualization of zone-level risk scores |
| 🚨 **Fraud Ring Alerts** | Cluster visualization map with temporal density chart and social graph links |
| 📋 **Live Claims Queue** | SSE-fed real-time table with Trust Score breakdown drawer |
| 💰 **Payout Pipeline** | Status view: pending → processing → completed → failed |
| 🔮 **Reserve Health** | Liquidity pool gauge: current balance vs. forecasted claims |
| 🧠 **Model Confidence** | Per-model accuracy indicators for KAVACH, AEGIS, and ring detection |

### Design Philosophy

```
Not a flashy fintech carnival. A safety cockpit.
───────────────────────────────────────────────
✓ Reassuring       ✓ Fast           ✓ Mobile-first
✓ Financially clear ✓ Non-punitive   ✓ Zero clutter
```

> [!TIP]
> **The One Story:** Everything in the interface reinforces a single narrative — *"A worker gets protected in minutes, not months."* Onboarding is quick. Premium is understandable. Risk is visible. Payout is automatic. Fraud checks are invisible unless needed.

---

## ⚠️ Risks, Assumptions & Future Vision

### Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Weather API downtime | Dual-source (IMD + OpenWeatherMap); Redis caches last-known state |
| ML model drift | Weekly retraining; accuracy monitoring dashboard |
| Low worker adoption | 60-second onboarding + WhatsApp viral distribution + vernacular language |
| Evolving spoofing tools | Active learning — every confirmed fraud retrains AEGIS weekly |
| Liquidity shortfall | Prophet-based reserve forecasting + ring-held payouts protect the pool |

### Assumptions
- Workers have Android smartphones with GPS, accelerometer, and internet
- Weather/AQI APIs provide reliable zone-level data (free-tier/mock for hackathon)
- Platform APIs (Zepto/Blinkit) can be simulated
- UPI infrastructure available via Razorpay sandbox

### 📈 Success Metrics

| Metric | Target |
|---|---|
| Onboarding completion | > 85% |
| Weekly activation rate | > 70% of registered workers |
| Trigger detection accuracy | > 95% |
| Auto-approval rate (genuine claims) | > 80% |
| Ring detection precision | > 90% |
| False positive rate (honest workers flagged) | < 5% |
| Payout turnaround (auto-approved) | < 5 minutes |

### 🔮 Future Scope

| Feature | Timeline | Impact |
|---|---|---|
| **Multi-persona expansion** | Post-hack | Extend to food delivery (Zomato/Swiggy) and e-commerce riders |
| **On-device ML (TFLite)** | Phase 3+ | Deploy TensorFlow Lite models via Capacitor's native layer for real-time motion analysis without server round-trips |
| **Regional languages** | Phase 3 | Tamil, Hindi, Telugu, Kannada for push notifications and onboarding |
| **Live UPI AutoPay** | Production | Replace Razorpay sandbox with real UPI mandates |
| **Reinsurance marketplace** | Long-term | Connect parametric policies to reinsurance partners |
| **Community trust network** | Long-term | Workers build reputation scores that unlock lower premiums |

---

## 👥 Built By — Team DevGodz

<div align="center">

### ⚡ DevGodz

*We build safety nets for the people who power India's 10-minute revolution.*

| Member | Role |
|:---:|:---:|
| **Siddhant Kaushik** | 👑 Team Lead |
| **Pollock Deb** | Core Team |
| **Atul Bhardwaj** | Core Team |
| **Devamithra Ramesan Bhavya** | Core Team |

</div>

---

## 🔗 Links

| Resource | Link |
|:---:|---|
| 🎬 **Demo Video (2-min)** | [Google Drive — Phase 1 Video](https://drive.google.com/drive/folders/1mUh3e1g5_D2iPK3s0-t4NgtCyY4PbVQE?usp=drive_link) |

---

<div align="center">

---

**GigShield** — *Protecting Incomes, Not Just Deliveries.*

_Phase 1: The idea is sharp. Phase 2: The code gets real. Phase 3: The streets get safer._

Built with 🛡️ by **Team DevGodz** for **Guidewire DEVTrails 2026**

---

</div>
