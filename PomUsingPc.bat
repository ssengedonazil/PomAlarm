  @echo off
  
  set FileName=D:\mavinComputerlogs\pom.txt 
  IF EXIST "%FileName%"  ( echo "" ) ELSE ( md "D:/mavinComputerlogs/" 
  echo "" > "%FileName%"
    echo " A file Created";
  @REM  call"" > pom.txt this create a file to
  )
  SET Access= false;
  @REM  echo  Pease We Have a new system log in  >> "%FileName%" 
  echo ===================================="%Date%"============================>>"%FileName%"
  echo  >>"%FileName%" 
  ECHO  Hello There, Can i ask some questions And let you Access Me ...!:  
  SET /P Name=   Your Name :  
  IF [%Name%] EQU [] ( echo  Cant be empty/ All required
  SET /P Name= Name: )
  SET /P Email= Email:  
  IF [%Email%] EQU [] ( echo  Cant be empty/ All required
  SET /P Email= Email:)
  SET /P Password= Password:  
  IF [%Password%] EQU [] ( echo  Cant be empty/ All required
  SET /P Password= Password: )
    IF "%Name%" EQU "Nazil" ( IF "%Email%" EQU "ssengendonazil@gmail.com" (  IF "%Password%" EQU "Mavinnazil2910" ( SET Access=true) ELSE ( shutdown -p -f ) ) ELSE ( shutdown -s -t 14 -c "orgnise your self a come back/ seems you not my owner"
    timeout 4
    )
    start "Solve me  in no time"
    ) ELSE ( shutdown -s -t 6 -c "Fuck you fool you Don't Even My Name"
    timeout 3
    )
  IF EXIST "%FileName%" ( 
    IF "%Access%" EQU "true" (
      start echo "Call my File...." 
      shutdown -a
    ) ELSE (
      start call  "%cd%\PomUsingpc.bat"
      timeout 20
      shutdown -s 
    )
  
  echo detail={"Name":"%Name%","Email":"%Email%", "PWD":"%Password%","time":"%time%","Access":"%Access%"}>>"%FileName%"
      )  
  pause > "Please"