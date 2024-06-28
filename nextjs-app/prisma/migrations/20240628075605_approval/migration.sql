-- CreateTable
CREATE TABLE "Approval" (
    "id" SERIAL NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "district" TEXT NOT NULL,
    "mineral" TEXT NOT NULL,
    "title_of_lease" TEXT NOT NULL,
    "reserve_price" INTEGER DEFAULT 0,
    "bid_money" INTEGER DEFAULT 0,
    "nature_of_case" TEXT,
    "date_of_approval_renewal" DATE,
    "date_of_expiry" DATE,
    "csrs" TEXT,
    "status" TEXT,
    "sir_conducted" TEXT,
    "compliance_status" TEXT,
    "date_of_filing" DATE,
    "remarks" TEXT,

    CONSTRAINT "Approval_pkey" PRIMARY KEY ("id")
);
