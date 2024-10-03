# Use the official .NET Core 8 SDK image to build the app
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS base

# Set working directory
WORKDIR /app

FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
# Copy the solution and project files
WORKDIR /src

COPY ["web.csproj", "./"]
# Restore dependencies for the web project
RUN dotnet restore "web.csproj"

# Copy all files for the web project
COPY . .

WORKDIR /src/

# Build the web project
RUN dotnet build "web.csproj" -c Release -o /app/build

FROM build AS publish

RUN dotnet publish "web.csproj" -c Release -o /app/publish

# Build the final image using the base image and the published output
FROM base AS final

WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "web.dll"]