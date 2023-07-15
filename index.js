const mainContent = "Chúc em yêu luôn vui vẻ mỗi ngày và sớm thôi anh sẽ đến bên em "

const allbum1 = {
    content: "Em là đẹp nhất nên đừng tự ti về bản thân mình, em là đẹp nhất trong mắt anh ",
    cdn: "./img/1.png"
}

const allbum2 = {
    content: "Yêu em yêu em yêu em rất rất yêu em, em chỉ cần biết là anh yêu em rất nhiều ",
    cdn: "./img/2.png"
}

const startBtn = document.querySelector(".startBtn");

startBtn.addEventListener("click", () => {
    const letter = document.querySelector(".letter");
    letter.classList.add("active");
    setTimeout(() => {
        const designContent = mainContent.split("");
        const mainLetterPage = document.querySelector(".letterContent");

        designContent.forEach((val, index) => {
            setTimeout(() => {
                mainLetterPage.innerHTML += val;
                if (index == (designContent.length - 1)) {
                    const allBum1 = document.querySelector("#allbum1");
                    allBum1.classList.add("active");

                    setTimeout(() => {
                        const contentAllbum1 = allbum1.content.split("");
                        allBum1.querySelector(".imgAllbum").src = allbum1.cdn;

                        contentAllbum1.forEach((valAllbum1, indexAllbum1) => {
                            setTimeout(() => {
                                allBum1.querySelector(".detailAllbum").innerHTML += valAllbum1;
                                if (indexAllbum1 == (contentAllbum1.length - 1)) {
                                    const allBum2 = document.querySelector("#allbum2");
                                    allBum2.classList.add("active");

                                    setTimeout(() => {
                                        const contentAllbum2 = allbum2.content.split("");
                                        allBum2.querySelector(".imgAllbum").src = allbum2.cdn;

                                        contentAllbum2.forEach((valAllbum2, indexAllbum2) => {
                                            setTimeout(() => {
                                                allBum2.querySelector(".detailAllbum").innerHTML += valAllbum2   
                                            }, 100 * (indexAllbum2 + 1))
                                        })
                                    })
                                }
                            }, 100 * (indexAllbum1 + 1))
                        })
                    }, 500)
                }
            }, 10 * index)
        })
    }, 500)
})