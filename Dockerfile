# Use the official .NET SDK 8 image as the base image
FROM mcr.microsoft.com/dotnet/sdk:8 AS build-env

# Set the working directory inside the container
WORKDIR /app



# Copy the entire project files to the container
COPY . .

# Restore dependencies and build the application
RUN dotnet restore
RUN dotnet publish -c Release -o out

# Create a smaller runtime image
FROM mcr.microsoft.com/dotnet/runtime:8

# Set the working directory inside the runtime container
WORKDIR /app

# Copy the published output from the build environment
COPY --from=build-env /app/out .

# Set the entry point for the application
# ENTRYPOINT ["dotnet", "YourAppName.dll"]
