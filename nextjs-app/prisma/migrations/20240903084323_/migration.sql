-- CreateEnum
CREATE TYPE "ValidityStatus" AS ENUM ('DEFERRED', 'EXPIRED', 'PENDING', 'REJECTED', 'VALID');

-- CreateEnum
CREATE TYPE "Type" AS ENUM ('Renewal', 'Fresh');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('EIA', 'IEE');

-- CreateEnum
CREATE TYPE "Proponent" AS ENUM ('DEPARTMENT', 'PRIVATE');

-- CreateTable
CREATE TABLE "Approval" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "field_office" TEXT,
    "district" TEXT NOT NULL,
    "division" TEXT,
    "mineral" TEXT NOT NULL,
    "title_of_lease" TEXT NOT NULL,
    "proponent" "Proponent" NOT NULL,
    "acreage" DOUBLE PRECISION,
    "financial_impact" INTEGER DEFAULT 0,
    "category" "Category",
    "type" "Type",
    "date_of_approval_renewal" DATE,
    "date_of_expiry" DATE,
    "validity_status" "ValidityStatus",
    "sir_conducted" TEXT,
    "compliance_status" TEXT,
    "date_of_filing" DATE,
    "remarks" TEXT,

    CONSTRAINT "Approval_pkey" PRIMARY KEY ("id")
);
