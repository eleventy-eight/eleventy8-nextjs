import Script from "next/script";

export default function ScriptBMCWidget() {
    return (
        <>
            <Script
                data-name='BMC-Widget'
                data-cfasync='false'
                src='https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
                data-id='eleventy8'
                data-description='Support me on Buy me a coffee!'
                data-message=''
                data-color='#FF5F5F'
                data-position='Right'
                data-x_margin='18'
                data-y_margin='18'
            />
        </>
    );
}
