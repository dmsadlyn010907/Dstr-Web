function scrollToElement(elementSelector, instance = 0) {
    // Pilih semua elemen yang cocok dengan pemilih yang diberikan
    const elements = document.querySelectorAll(elementSelector);
    //Periksa apakah ada elemen yang cocok dengan pemilih dan apakah contoh yang diminta ada
    if (elements.length > instance) {
        // Scrol ke contoh elemen yang ditentukan
        elements[instance].scrollIntoView({ behavior: 'smooth' });
    }
}

const link1 = document.getElementById("link1");
const link2 = document.getElementById("link2");
const link3 = document.getElementById("link3");

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    // Scrol ke elemen kedua dengan kelas “header”
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});