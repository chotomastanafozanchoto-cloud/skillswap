@echo off
setlocal
echo ===================================================
echo       SKILLSWAP - Push to GitHub Utility
echo   Founder: Fozan - Web Developer as a Problem Solver
echo ===================================================
echo.
set /p REPO_URL="Apna GitHub Repository URL yahan paste karein: "
if "%REPO_URL%"=="" (
    echo Error: URL khali nahi ho sakta.
    pause
    exit /b
)

echo.
echo Connecting to: %REPO_URL% ...
git remote remove origin 2>nul
git remote add origin %REPO_URL%
git branch -M main

echo.
echo Staging files and creating commit...
git add .
git commit -m "feat: complete modern production SkillSwap website (Assignments 01 to 10) by Fozan" 2>nul

echo.
echo Pushing to GitHub (Browser mein login prompt aye toh Sign In karein)...
git push -u origin main

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ===================================================
    echo  SUCCESS! SkillSwap GitHub par push ho chuka hai!
    echo ===================================================
) else (
    echo.
    echo Push nahi ho saka. Barah-e-karam check karein ke repository exist karti hai aur aap logged in hain.
)

echo.
pause
