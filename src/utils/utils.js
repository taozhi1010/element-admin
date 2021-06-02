const utils = {
    getAppVersion: function() {

        return "1.0.0";
    },
    getScreenWidth: function() {
        // header头部监听
        let screenWidth;
        screenWidth = document.body.clientWidth

        window.addEventListener('resize', function() {
            return (() => {
                window.screenWidth = document.body.clientWidth
                screenWidth = window.screenWidth
                return screenWidth
            })()
        })
        return screenWidth
    }
}
export default utils