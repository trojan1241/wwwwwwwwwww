import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, boolean, json, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Users table with roles
export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  email: text("email").notNull().unique(),
  fullName: text("full_name").notNull(),
  role: text("role").notNull().default("patient"), // patient, doctor, dietitian, trainer, admin
  createdAt: timestamp("created_at").defaultNow(),
});

// Health profiles
export const healthProfiles = pgTable("health_profiles", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  gender: text("gender"),
  dateOfBirth: text("date_of_birth"),
  height: integer("height"), // cm
  weight: decimal("weight", { precision: 5, scale: 2 }), // kg
  bloodType: text("blood_type"),
  chronicDiseases: json("chronic_diseases").$type<string[]>(),
  medications: json("medications").$type<string[]>(),
  allergies: json("allergies").$type<string[]>(),
  familyHistory: json("family_history").$type<string[]>(),
  smokingStatus: text("smoking_status"),
  alcoholConsumption: text("alcohol_consumption"),
  updatedAt: timestamp("updated_at").defaultNow(),
});

// Vital signs
export const vitalSigns = pgTable("vital_signs", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  heartRate: integer("heart_rate"),
  heartRateResting: integer("heart_rate_resting"),
  bloodPressureSystolic: integer("blood_pressure_systolic"),
  bloodPressureDiastolic: integer("blood_pressure_diastolic"),
  spO2: integer("spo2"),
  glucose: decimal("glucose", { precision: 5, scale: 2 }),
  temperature: decimal("temperature", { precision: 4, scale: 1 }),
  steps: integer("steps"),
  sleepDuration: integer("sleep_duration"), // minutes
  sleepQuality: text("sleep_quality"),
  timestamp: timestamp("timestamp").defaultNow(),
});

// Consultations
export const consultations = pgTable("consultations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  pathway: text("pathway").notNull(), // new_symptoms, chronic_followup, prescription_renewal
  symptoms: json("symptoms").$type<any>(),
  aiDiagnosis: json("ai_diagnosis").$type<any>(),
  doctorNotes: text("doctor_notes"),
  status: text("status").notNull().default("pending"), // pending, in_review, completed
  doctorId: varchar("doctor_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  reviewedAt: timestamp("reviewed_at"),
});

// Prescriptions
export const prescriptions = pgTable("prescriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  consultationId: varchar("consultation_id").references(() => consultations.id),
  doctorId: varchar("doctor_id").notNull().references(() => users.id),
  medicationName: text("medication_name").notNull(),
  dosage: text("dosage").notNull(),
  duration: text("duration").notNull(),
  instructions: text("instructions"),
  status: text("status").notNull().default("active"), // active, expired, renewed
  issuedAt: timestamp("issued_at").defaultNow(),
  expiresAt: timestamp("expires_at"),
});

// e-ZLA requests
export const ezlaRequests = pgTable("ezla_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  consultationId: varchar("consultation_id").references(() => consultations.id),
  reason: text("reason").notNull(),
  duration: integer("duration").notNull(), // days
  status: text("status").notNull().default("pending"), // pending, approved, issued
  doctorId: varchar("doctor_id").references(() => users.id),
  createdAt: timestamp("created_at").defaultNow(),
  approvedAt: timestamp("approved_at"),
});

// Medical documents
export const medicalDocuments = pgTable("medical_documents", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  title: text("title").notNull(),
  type: text("type").notNull(), // lab_result, imaging, visit_summary, referral
  fileUrl: text("file_url"),
  analysis: json("analysis").$type<any>(),
  uploadedAt: timestamp("uploaded_at").defaultNow(),
});

// Diet plans
export const dietPlans = pgTable("diet_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  dietitianId: varchar("dietitian_id").references(() => users.id),
  duration: integer("duration").notNull(), // days
  meals: json("meals").$type<any[]>(),
  preferences: json("preferences").$type<any>(),
  status: text("status").notNull().default("active"), // active, completed, modified
  createdAt: timestamp("created_at").defaultNow(),
});

// Workout plans
export const workoutPlans = pgTable("workout_plans", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  trainerId: varchar("trainer_id").references(() => users.id),
  goal: text("goal").notNull(),
  workouts: json("workouts").$type<any[]>(),
  status: text("status").notNull().default("active"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Alerts
export const alerts = pgTable("alerts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  level: integer("level").notNull(), // 0: info, 1: alert, 2: emergency
  type: text("type").notNull(),
  message: text("message").notNull(),
  vitalData: json("vital_data").$type<any>(),
  userResponse: text("user_response"),
  status: text("status").notNull().default("active"), // active, acknowledged, resolved, escalated
  triggeredAt: timestamp("triggered_at").defaultNow(),
  resolvedAt: timestamp("resolved_at"),
});

// ICE contacts
export const iceContacts = pgTable("ice_contacts", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  relationship: text("relationship").notNull(),
  phone: text("phone").notNull(),
  email: text("email"),
  isPrimary: boolean("is_primary").default(false),
});

// Subscriptions
export const subscriptions = pgTable("subscriptions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  plan: text("plan").notNull(), // standard, premium, monitoring
  interval: text("interval").notNull(), // monthly, annual
  status: text("status").notNull().default("active"), // active, past_due, cancelled
  stripeSubscriptionId: text("stripe_subscription_id"),
  currentPeriodEnd: timestamp("current_period_end"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Device connections
export const deviceConnections = pgTable("device_connections", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  userId: varchar("user_id").notNull().references(() => users.id),
  deviceType: text("device_type").notNull(), // apple_health, google_fit, fitbit, etc
  isConnected: boolean("is_connected").default(true),
  lastSync: timestamp("last_sync"),
  createdAt: timestamp("created_at").defaultNow(),
});

// Types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof insertUserSchema>;
export type HealthProfile = typeof healthProfiles.$inferSelect;
export type VitalSigns = typeof vitalSigns.$inferSelect;
export type Consultation = typeof consultations.$inferSelect;
export type Prescription = typeof prescriptions.$inferSelect;
export type EzlaRequest = typeof ezlaRequests.$inferSelect;
export type MedicalDocument = typeof medicalDocuments.$inferSelect;
export type DietPlan = typeof dietPlans.$inferSelect;
export type WorkoutPlan = typeof workoutPlans.$inferSelect;
export type Alert = typeof alerts.$inferSelect;
export type IceContact = typeof iceContacts.$inferSelect;
export type Subscription = typeof subscriptions.$inferSelect;
export type DeviceConnection = typeof deviceConnections.$inferSelect;

// Insert schemas
export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  email: true,
  fullName: true,
  role: true,
});

export const insertHealthProfileSchema = createInsertSchema(healthProfiles).omit({
  id: true,
  updatedAt: true,
});

export const insertVitalSignsSchema = createInsertSchema(vitalSigns).omit({
  id: true,
  timestamp: true,
});

export const insertConsultationSchema = createInsertSchema(consultations).omit({
  id: true,
  createdAt: true,
  reviewedAt: true,
});

export const insertPrescriptionSchema = createInsertSchema(prescriptions).omit({
  id: true,
  issuedAt: true,
});

export const insertAlertSchema = createInsertSchema(alerts).omit({
  id: true,
  triggeredAt: true,
  resolvedAt: true,
});

export const insertIceContactSchema = createInsertSchema(iceContacts).omit({
  id: true,
});
