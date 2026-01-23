import React, { useEffect } from 'react';

const VoiceflowWidget = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://cdn.voiceflow.com/widget-next/bundle.mjs';

        script.onload = () => {
            if (window.voiceflow && window.voiceflow.chat) {
                window.voiceflow.chat.load({
                    verify: { projectID: '6970a6fb394d4cc1646b9dce' },
                    url: 'https://general-runtime.voiceflow.com',
                    versionID: '6970a6fb394d4cc1646b9dcf',
                    voice: {
                        url: "https://runtime-api.voiceflow.com"
                    }
                });
            }
        };

        // Insert before existing scripts to ensure it loads
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        return () => {
            // Cleanup if necessary, though external widgets usually persist
            // Removing the script tag doesn't fully unload the widget usually, 
            // but it prevents multiple injections on re-mounts if strict mode is on.
            if (script.parentNode) {
                script.parentNode.removeChild(script);
            }
        };
    }, []);

    return null; // The widget renders itself
};

export default VoiceflowWidget;
