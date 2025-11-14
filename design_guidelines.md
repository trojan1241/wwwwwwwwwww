# Design Guidelines: AI Medical Platform

## Design Approach
**System-Based Approach** using Material Design principles adapted for medical applications, drawing inspiration from healthcare platforms like Epic MyChart, Zocdoc, and health monitoring apps (Apple Health, Google Fit) for familiar, trustworthy patterns.

**Core Principles:**
- Medical-grade clarity and trust
- Information hierarchy for critical health data
- Immediate recognition of alert states
- Professional yet approachable interface
- Accessibility as requirement, not feature

---

## Typography

**Font Family:**
- Primary: Inter (via Google Fonts CDN) - exceptional readability for medical data
- Monospace: JetBrains Mono - for numerical health values, timestamps, measurements

**Type Scale:**
- Hero/Marketing: text-5xl to text-6xl, font-bold
- Page Titles: text-3xl, font-semibold
- Section Headers: text-2xl, font-semibold
- Card Titles: text-xl, font-medium
- Body Text: text-base, font-normal
- Small/Meta: text-sm, font-normal
- Captions: text-xs, font-medium
- Health Values (Vital Signs): text-2xl to text-4xl, font-bold, monospace
- Critical Alerts: text-lg, font-bold

---

## Layout System

**Spacing Primitives:** Use Tailwind units of **2, 4, 6, 8, 12, 16** for consistency
- Micro spacing: p-2, gap-2
- Component spacing: p-4, gap-4, m-6
- Section spacing: p-8, py-12, py-16
- Page margins: px-4 (mobile), px-8 (desktop)

**Grid Structure:**
- Dashboard cards: grid with gap-6
- Desktop: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Vital signs: grid-cols-2 md:grid-cols-4
- Feature grids: lg:grid-cols-3
- Always stack to single column on mobile

**Container Widths:**
- Full dashboard: max-w-7xl mx-auto
- Content sections: max-w-6xl mx-auto
- Forms and readings: max-w-2xl
- Text content: max-w-prose

---

## Component Library

### Navigation
**Top Navigation Bar:**
- Fixed position with subtle shadow
- Height: h-16
- Logo left, navigation center, user menu right
- Icons: Heroicons (via CDN)
- Mobile: Hamburger menu with full-screen overlay

**Sidebar (Doctor/Admin Panels):**
- Width: w-64
- Collapsible to w-16 icon-only mode
- Section groupings with dividers
- Active state: subtle background, bold text, left border accent

### Cards & Containers
**Health Status Cards:**
- Rounded: rounded-xl
- Padding: p-6
- Shadow: shadow-md hover:shadow-lg transition
- Border: border with subtle treatment
- Icon top-left, value center-dominant, label below, trend indicator top-right

**Dashboard Cards:**
- Same styling as health cards
- Min height: min-h-[200px] for consistency
- Loading state: pulse animation skeleton

**Alert Cards:**
- Border-left accent (4px) indicating severity
- Level 0: subtle treatment
- Level 1: medium prominence
- Level 2: maximum prominence, larger text, icon animation

### Buttons & Actions
**Primary CTA:**
- Size: px-6 py-3
- Rounded: rounded-lg
- Font: font-semibold
- Hover: subtle scale or shadow increase

**Secondary Actions:**
- Size: px-4 py-2
- Outlined style with border-2
- Rounded: rounded-lg

**Icon Buttons:**
- Size: p-2 or p-3
- Rounded: rounded-full
- Hover: background treatment

**Emergency/Critical Actions:**
- Larger size: px-8 py-4
- Prominent styling
- Icon + text combination

### Forms & Inputs
**Text Inputs:**
- Height: h-12
- Padding: px-4
- Rounded: rounded-lg
- Border: border-2
- Focus: ring-2 ring-offset-2
- Label: text-sm font-medium mb-2

**Select Dropdowns:**
- Same sizing as text inputs
- Chevron icon right

**Checkboxes/Radio:**
- Size: w-5 h-5
- Rounded: rounded (checkbox), rounded-full (radio)
- Custom styled with larger touch targets (p-1)

**Medical Questionnaires:**
- Progress indicator at top
- Section-by-section approach
- Clear "Save & Continue" pattern

### Data Display
**Vital Signs Display:**
- Large numerical value (text-4xl, monospace)
- Unit in smaller text beside/below
- Icon representing metric
- Mini sparkline graph showing trend
- Timestamp of last reading (text-xs)

**Charts & Graphs:**
- Use Chart.js or Recharts
- Clean grid lines
- Hover tooltips with detailed values
- Date range selectors above charts
- Legend below charts

**Tables:**
- Zebra striping for rows
- Sticky header on scroll
- Responsive: stack on mobile
- Pagination for long lists
- Sort indicators in headers

### Status Indicators
**Badges:**
- Small: px-2 py-1, text-xs, rounded-full
- Medium: px-3 py-1, text-sm, rounded-full
- States: Active, Inactive, Pending, Critical, Normal

**Alert Banners:**
- Full width
- Icon left, message center, dismiss right
- Padding: p-4
- Rounded corners on page banners
- Different treatments per severity

---

## Page-Specific Layouts

### Public Landing Page
**Hero Section:**
- Height: min-h-[600px] (not forced 100vh)
- Two-column: text left (60%), dashboard mockup right (40%)
- Padding: py-20
- Large hero image showing dashboard with monitoring active
- CTAs: two buttons side-by-side with gap-4

**Feature Sections:**
- Alternating layouts: image-left/text-right, then flip
- Padding: py-16 to py-24
- Icons: large (w-12 h-12) with subtle background circles

**Monitoring Section:**
- Centered layout with max-w-4xl
- Numbered steps or timeline visualization
- Padding: py-20
- Disclaimer in smaller text with info icon

**Pricing:**
- 3-column grid on desktop
- Cards with: plan name, price (large), features list, CTA button
- "Most Popular" badge on recommended plan
- Annual discount callout

### Patient Dashboard
**Layout:**
- Grid with sidebar approach on desktop
- Top: Welcome banner with name, monitoring status badge
- Main grid: 2x2 on tablet, 3-column on desktop
- Card order: Health Status, Today's Plan, Monitoring, Recent Activity
- Each card self-contained with header and action link

### Medical Consultation Interface
**Interview Flow:**
- Progress stepper at top
- Single question per screen on mobile
- Multiple questions grouped on desktop
- Large touch targets for symptom selection
- "Back" and "Next" clearly visible

**Results/Summary View:**
- Split screen: AI summary left, patient data right
- Diagnosis cards with confidence indicators
- Recommended actions as checklist
- "Approve" CTA prominent

### Doctor Clinical Panel
**Single-Screen Layout:**
- Three-column: patient data (25%), AI report (50%), actions (25%)
- Sticky action panel on scroll
- Collapsible sections for medical history
- Quick-access toolbar at top

### Monitoring Dashboard
**Real-time Data:**
- Large stat cards at top
- Live updating values (pulse animation on change)
- Chart below showing 24hr trend
- Alert history as timeline below

---

## Images

**Hero Section:** Large dashboard screenshot showing patient interface with monitoring active, vital signs cards, and alert system - professional mockup with realistic data, positioned right side occupying 40% width

**Feature Sections:** 
- Screenshots of actual interfaces (consultation, diet plan, workout)
- Device integration: photos of Apple Watch, fitness trackers
- Emergency flow: illustrated diagram of alert procedure
- Team photos for trust section (if applicable)

**Use Throughout:**
- Icons from Heroicons CDN for all UI icons
- Medical/health icons for conditions, symptoms
- Device brand logos in integration section
- Illustration style: clean, modern, not overly playful (medical context)

---

## Accessibility

- Minimum contrast ratio: 4.5:1 for all text
- Touch targets: minimum 44px × 44px
- Focus indicators: visible ring-2 on all interactive elements
- ARIA labels on all icons and icon-only buttons
- Skip navigation link
- Keyboard navigation throughout
- Screen reader friendly alerts and status updates
- High contrast mode support
- Text resizing without layout breaks

---

## Responsive Behavior

**Mobile (<768px):**
- Single column layouts
- Hamburger navigation
- Stacked vital sign cards
- Full-width forms
- Bottom navigation bar for primary actions

**Tablet (768px-1024px):**
- 2-column grids
- Sidebar becomes drawer
- Cards in pairs

**Desktop (>1024px):**
- 3-column grids
- Persistent sidebar
- Multi-column forms where appropriate
- Expanded data tables