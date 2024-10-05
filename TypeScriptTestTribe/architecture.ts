/* Architecture
1. MS launched 2020 based on TypeScript
2. Web Automation and APi-basics only
3. Selenium vs PW architecure
    PW no middleman like Selenium
    In Selenium
        1.All the code going to the Browser via Web Driver
        due to which always have a delay in executing the code
        2.Your client sends your code via HTTP Request each time
        Hand-shake for each HTTP Request
        3.Each time open the browser, establish connection, 
        go to Google server again establish conection
        resulting in tests being flaky
        4.Wait - explicit and implicit -

    PW
        1.web socket protocol - everything done in one session only
        2.No flaky behavior, executuion ends in 1 session only, 
        no multiple hand-shakes needed between client-Server
        3.written in Typescript - so no middleman needed.
        Avoids all the time going backward and forward
        4.Auto-wait mechanism built-in

        Limited API automation capabilities

    package.json parent dependencies - package-lock.json child dep
    cannot update lock directly
    All child-dep auto updated - same in Selenium

    

*/ 
