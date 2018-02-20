var OSName="Unknown OS";

if (navigator.userAgent.indexOf("Win")!== -1) OSName="Windows";
if (navigator.userAgent.indexOf("Mac")!== -1) OSName="MacOS";
if (navigator.userAgent.indexOf("X11")!== -1) OSName="UNIX";
if (navigator.userAgent.indexOf("Linux")!== -1) OSName="Linux";
if (navigator.userAgent.indexOf("Android")!== -1) OSName="Android";

export default OSName