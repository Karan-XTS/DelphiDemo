export type Column = { name: string; pk?: boolean; fk?: boolean }
export type TableDef = { name: string; columns: Column[] }

export const bronzeTables: TableDef[] = [
  {
    name: 'LEAD',
    columns: [
      { name: 'Lead_ID', pk: true },
      { name: 'Company_ID', fk: true },
      { name: 'User_ID', fk: true },
      { name: 'Lead_Status' },
      { name: 'Created_DT' },
    ],
  },
  {
    name: 'COMPANY',
    columns: [
      { name: 'Company_ID', pk: true },
      { name: 'Company_Name' },
      { name: 'Industry' },
    ],
  },
  {
    name: 'USER',
    columns: [
      { name: 'User_ID', pk: true },
      { name: 'User_Name' },
      { name: 'Email' },
    ],
  },
  {
    name: 'ORDER',
    columns: [
      { name: 'Order_ID', pk: true },
      { name: 'Lead_ID', fk: true },
      { name: 'Amount' },
      { name: 'Status' },
    ],
  },
  {
    name: 'ORDER_SEGMENT',
    columns: [
      { name: 'Segment_ID', pk: true },
      { name: 'Order_ID', fk: true },
      { name: 'Segment_Name' },
    ],
  },
  {
    name: 'DELIVERY',
    columns: [
      { name: 'Delivery_ID', pk: true },
      { name: 'Order_ID', fk: true },
      { name: 'Delivery_Status' },
    ],
  },
  {
    name: 'ENGAGEMENT',
    columns: [
      { name: 'Engagement_ID', pk: true },
      { name: 'Lead_ID', fk: true },
      { name: 'Email_Open' },
      { name: 'Clicks' },
    ],
  },
  {
    name: 'QA',
    columns: [
      { name: 'QA_ID', pk: true },
      { name: 'Lead_ID', fk: true },
      { name: 'QA_Status' },
    ],
  },
  {
    name: 'SMTP',
    columns: [
      { name: 'SMTP_ID', pk: true },
      { name: 'Lead_ID', fk: true },
      { name: 'SMTP_Status' },
    ],
  },
  {
    name: 'TARGETING',
    columns: [
      { name: 'Target_ID', pk: true },
      { name: 'Lead_ID', fk: true },
      { name: 'Region' },
      { name: 'Performance_Target' },
    ],
  },
]

export const silverTables: TableDef[] = [
  {
    name: 'SILVER_LEAD',
    columns: [
      { name: 'Lead_ID', pk: true },
      { name: 'Company_Name' },
      { name: 'Lead_Status' },
      { name: 'Country' },
      { name: 'Owner_Name' },
    ],
  },
  {
    name: 'SILVER_ORDER',
    columns: [
      { name: 'Order_ID', pk: true },
      { name: 'Client_Name' },
      { name: 'Campaign_Name' },
      { name: 'Segment_Name' },
      { name: 'Status' },
    ],
  },
  {
    name: 'SILVER_ENGAGEMENT',
    columns: [
      { name: 'Lead_ID', pk: true },
      { name: 'Email_Open' },
      { name: 'Clicks' },
      { name: 'Score' },
    ],
  },
]

export const goldTable: TableDef = {
  name: 'GOLD_ENGAGEMENT_360',
  columns: [
    { name: 'Lead_ID', pk: true },
    { name: 'Lead_Name' },
    { name: 'Company_Name' },
    { name: 'Client_Name' },
    { name: 'Campaign_Name' },
    { name: 'Industry' },
    { name: 'Region' },
    { name: 'Engagement_Score' },
    { name: 'QA_Status' },
    { name: 'SMTP_Status' },
    { name: 'Suppression_Flag' },
    { name: 'Delivery_Status' },
    { name: 'Performance_Target' },
    { name: 'Last_Activity_Date' },
  ],
}

export const transformations = [
  { title: 'Data Cleaning', desc: 'Remove duplicates and malformed records' },
  { title: 'Null Handling', desc: 'Impute or default missing values' },
  { title: 'Standardization', desc: 'Consistent formats, casing, units' },
  { title: 'Lookup Mapping', desc: 'Resolve codes to business values' },
  { title: 'Data Quality Rules', desc: 'Validate against expectations' },
  { title: 'Business Logic', desc: 'Derive trusted business entities' },
]

export const achievements = [
  {
    title: 'Migrated XDBS CRM Data to Bronze Layer',
    desc: 'Full ingestion of the MySQL CRM system into raw Bronze tables.',
  },
  {
    title: 'Replicated ODM Source Data',
    desc: 'Operational Data Model sources mirrored into the warehouse.',
  },
  {
    title: 'Built Local Data Warehouse using Polars + Parquet',
    desc: 'High-performance columnar storage with a Polars processing engine.',
  },
  {
    title: 'Developed Silver Layer Transformations',
    desc: 'Cleansing, standardization, and enrichment into business entities.',
  },
  {
    title: 'Implemented Gold Layer Business Models',
    desc: 'Consolidated, denormalized datasets ready for analytics.',
  },
  {
    title: 'Replicated Warehouse in GCP Sandbox',
    desc: 'Cloud parity environment for validation and scale testing.',
  },
]

export const lineageStages = [
  {
    id: 'source',
    label: 'MySQL XDBS + ODM Data',
    detail:
      'Source of truth operational systems: the XDBS MySQL CRM and Operational Data Model feeds, captured continuously.',
    tone: 'azure',
  },
  {
    id: 'bronze',
    label: 'Bronze Layer',
    detail:
      'Raw landing zone. Data is ingested exactly as received - fully normalized, source structure preserved, no business rules.',
    tone: 'bronze',
  },
  {
    id: 'silver',
    label: 'Silver Transformations',
    detail:
      'Cleaning, null handling, standardization, lookup mapping, quality rules, and business logic produce trusted entities.',
    tone: 'silver',
  },
  {
    id: 'gold',
    label: 'Gold Layer',
    detail:
      'Fully denormalized, reporting-ready datasets combined into a single source of truth',
    tone: 'gold',
  },
  {
    id: 'reporting',
    label: 'Delphi App',
    detail:
      'Business consumers query the Gold layer directly for dashboards, KPIs, and executive reporting.',
    tone: 'azure',
  },
] as const