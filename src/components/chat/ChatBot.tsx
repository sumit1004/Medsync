import React, { useEffect } from 'react';

declare global {
  interface Window {
    kommunicate: any;
  }
}

export default function ChatBot() {
  useEffect(() => {
    (function(d, m){
      var kommunicateSettings = {
        "appId": "2c0d8d7b5a2f9d9c1234567890abcdef",
        "popupWidget": true,
        "automaticChatOpenOnNavigation": false,
        "onInit": function() {
          window.kommunicate.updateSettings({
            "headerTitle": "MedSync Support",
            "headerBgColor": "#2563eb",
            "buttonBgColor": "#2563eb",
            "prechatFormEnabled": true,
            "prechatFormFields": [
              {
                "label": "Name",
                "type": "text",
                "required": true
              },
              {
                "label": "Email",
                "type": "email",
                "required": true
              }
            ],
            "botAvatar": "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y",
            // Responsive settings
            "popupWidget": true,
            "openPopupOnPageLoad": false,
            "widgetPosition": "right",
            "dynamicBubbleAlignment": true,
            "isSingleLayout": window.innerWidth <= 768, // Single layout for mobile
            "chatWidget": {
              "desktop": {
                "height": "550px",
                "width": "400px"
              },
              "mobile": {
                "height": "100%",
                "width": "100%"
              }
            }
          });

          // Add resize listener for responsive behavior
          window.addEventListener('resize', function() {
            window.kommunicate.updateSettings({
              "isSingleLayout": window.innerWidth <= 768
            });
          });
        }
      };
      var s = document.createElement("script"); 
      s.type = "text/javascript"; 
      s.async = true;
      s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
      var h = document.getElementsByTagName("head")[0]; 
      h.appendChild(s);
      window.kommunicate = m; 
      m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});
  }, []);

  return null;
}
