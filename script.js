$(document).ready(function () {
    $(".filter").click(function () {
        let filter = $(this).data("filter");

        if (filter === "all") {
            $(".laptop").show();
        } else {
            $(".laptop").hide();
            $("." + filter).show();
        }
    });

    const dataLaptop = {
        tuf: {
            nama: "ASUS TUF Gaming A15",
            gambar: "ASUS TUF Gaming A15 FA506.jpg",
            spesifikasi: [
                "Ryzen 7 4800H",
                "RTX 3050",
                "16GB RAM",
                "SSD 512GB"
            ],
            beli: "https://www.tokopedia.com/akakidanotebook/asus-tuf-a15-fa506ncg-ryzen-7-7445hs-rtx3050-4gb-16gb-512gb-win11-ohs-m365b-15-6fhd-ips-1732747633190012905"
        },

        nitro: {
            nama: "ACER Nitro V 15",
            gambar: "ACER Nitro V 15.png",
            spesifikasi: [
                "Intel Core i5",
                "RTX 2050",
                "16GB RAM",
                "SSD 512GB"
            ],
            beli: "https://www.lazada.co.id/products/acer-laptop-gaming-nitro-v-15-anv15-51-53wr-graphics-nvidia-geforce-rtx-3050-156-fhd-intel-core-i5-13420h-ram-8gb-storage-512-gb-ssd-windows-11-i8149724594-s14548078926.html"
        },

        advan: {
            nama: "ADVAN Laptop Workplus 14”",
            gambar: "ADVAN Laptop Workplus 14.png",
            spesifikasi: [
                "Ryzen 7",
                "16GB RAM",
                "SSD 512GB",
                "Office Ready"
            ],
            beli: "https://shopee.co.id/ADVAN-Laptop-Workplus-AMD-Ryzen-5-6600H-Ryzen-7-7735HS-16Gb-512Gb-1TB-14''-FHD-IPS-16-10-Fingerprint-Windows-11-Garansi-Resmi-1-Tahun-i.919692407.20591880461"
        },

        loq: {
            nama: "Lenovo LOQ 15IAX9",
            gambar: "Lenovo LOQ 15IAX9.png",
            spesifikasi: [
                "Intel Core i5",
                "RTX 3050",
                "12GB RAM",
                "SSD 512GB"
            ],
            beli: "https://www.tokopedia.com/infonetmalpoinsquare/lenovo-loq-15iax9-i5-12450hx-12gb-512gb-ssd-rtx3050-6gb-15-6-fhd-ips-144hz-w11-ohs?extParam=ivf%3Dfalse%26keyword%3Dlenovo+loq+15iax9%26search_id%3D2026011902572534ED066DF378EF272VP3%26src%3Dsearch&t_id=1768791454331&t_st=1&t_pp=search_result&t_efo=search_pure_goods_card&t_ef=goods_search&t_sm=&t_spt=search_result"
        },

        thin: {
            nama: "MSI Thin 15 B13V",
            gambar: "MSI Thin 15 B13V.png",
            spesifikasi: [
                "Intel Core i7",
                "RTX 4050",
                "12GB RAM",
                "SSD 512GB"
            ],
            beli: "https://shopee.co.id/MSI-Thin-15-B13UC-B13VE-i7-13620H-512GB-SSD-8GB-RTX3050-4GB-15.6-144Hz-W11-i.41303795.49351468106?extraParams=%7B%22display_model_id%22%3A340132118053%2C%22model_selection_logic%22%3A3%7D&sp_atk=e3caa8b2-89cf-4abf-8e3f-c470e4f763a3&xptdk=e3caa8b2-89cf-4abf-8e3f-c470e4f763a3"
        },

        vivobook: {
            nama: "Asus Vivobook Go 15",
            gambar: "vivobook go 15.png",
            spesifikasi: [
                "Ryzen 5",
                "Radeon Graphics",
                "16GB RAM",
                "SSD 512GB",
                "Office Home 2024"
            ],
            beli: "https://www.tokopedia.com/asusrogindonesia/asus-vivobook-go-15-e1504fa-ryzen-5-7520u-amd-radeon-graphics-16gb-512gb-15-6inch-win11-ohs24-m365-1731052804324361866"
        },

        expertbook: {
            nama: "ASUS ExpertBook B1",
            gambar: "ASUS ExpertBook B1.jpg",
            spesifikasi: [
                "Intel Core i7",
                "Intel Iris X",
                "8GB RAM",
                "SSD 512GB",
                "Fingerprint"
            ],
            beli: "https://www.tokopedia.com/kurniaabadisemesta/asus-expertbook-b1-b1400cba-i7-1255u-8gb-16gb-ssd-512g-14-fhd-w11-pro-ram-8gb-de4e9?extParam=ivf%3Dfalse%26keyword%3Dasus+expertbook+b1%26search_id%3D20260119031423577BCC914F9E55279BSD%26src%3Dsearch"
        },

        axioo: {
            nama: "Axioo MyBook Hype 5",
            gambar: "Axioo MyBook-Hype-5-X6.png",
            spesifikasi: [
                "Ryzen 5",
                "Radeon 660M Graphics",
                "16GB RAM",
                "SSD 512GB"
            ],
            beli: "https://els.id/product/axioo-mybook-hype-5-x6-amd-ryzen-5-6600h-16gb-ssd-512gb-14-wuxga-w11/"
        },

        thinkbook: {
            nama: "Lenovo ThinkBook 14 G7",
            gambar: "Lenovo ThinkBook 14 G7.png",
            spesifikasi: [
                "Ryzen 7",
                "Radeon 680M Graphics",
                "16GB RAM",
                "SSD 512GB"
            ],
            beli: "https://www.tokopedia.com/lenovo-official/lenovo-thinkbook-14-g7-arp-ryzen-7-7735hs-16gb-1tb-ssd-w11-oh-1731721824772064416?extParam=ivf%3Dfalse%26keyword%3Dlenovo+thinkbook+ryzen+7%26search_id%3D2026011903220494F6D7E04A4D452EEQNK%26src%3Dsearch"
        },
        victus: {
            nama: "HP Victus 15",
            gambar: "HP Victus 15.png",
            spesifikasi: [
                "Intel Core i5",
                "GTX 1650",
                "8GB RAM",
                "SSD 512GB"
            ],
            beli: "https://shopee.co.id/Cicilan-0-Victus-Laptop-HP-15-fa0116TX-15.6-inch-Intel-Core-i5-12500H-NVIDIA-GeForce-GTX-1650-8GB-RAM-512GB-SSD-Garansi-2-Tahun-Official-i.12758413.23904135181?sp_atk=5eeede18-bfe4-4ab3-8943-dda2569c5ae9&xptdk=5eeede18-bfe4-4ab3-8943-dda2569c5ae9"
        },
    };


    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    if (dataLaptop[id]) {
        $("#namaLaptop").text(dataLaptop[id].nama);
        $("#gambarLaptop").attr("src", dataLaptop[id].gambar);

        dataLaptop[id].spesifikasi.forEach(item => {
            $("#spesifikasi").append(`<li>${item}</li>`);
        });

        $("#btnBeli").click(function () {
            window.open(dataLaptop[id].beli, "_blank");
        });
    }

});

$(".filter").click(function () {
    $(".filter").removeClass("active");
    $(this).addClass("active");
});

$(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
        $("#btnTop").fadeIn();
    } else {
        $("#btnTop").fadeOut();
    }
});

$("#btnTop").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
});
