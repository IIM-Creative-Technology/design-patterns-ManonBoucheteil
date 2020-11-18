let moduleMovie = (function () {

    let title

    function setTitle(titleParam) {
        title = titleParam
    }

    function getTitle() {
        return title
    }

    return {
        setTitle: setTitle,
        getTitle: getTitle,
    }

})()

moduleMovie.setTitle('Titanic')
console.log(moduleMovie.getTitle())