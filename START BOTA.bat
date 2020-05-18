@echo off
title KONSOLA BOTA

echo poczekaj 10 sekund
timeout 10
cls
set /p login= login:
set /p haslo= haslo:
cls
color f
set /p odp= Chcesz wlaczyc bota? :
if  %odp%== tak  cls
echo TRWA PRZYGOTOWYWANIE BOTA!
if  %odp%== tak timeout 5
if  %odp%== tak cls
if  %odp%== tak  call node .
if  %odp%== nie echo To nie
if not %odp%== cls
pause
