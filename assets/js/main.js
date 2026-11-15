/**
 * TUATRAVEL LANDING PAGE - MAIN INTERACTIVE ENGINE
 * Framework: Vanilla JavaScript (ES6+)
 */

// 1. DATA SOURCE - 13 TOURS TRẢI DÀI 4 KHU VỰC
const TOURS_DATA = [
  // --- MIỀN BẮC (3 TOURS) ---
  {
    id: "tour-nb-01",
    name: "Hà Nội – Ninh Bình – Hạ Long",
    region: "north",
    regionName: "Miền Bắc",
    duration: "3 Ngày 2 Đêm",
    badge: "Di sản thế giới",
    image: "assets/images/ninh-binh.jpg",
    description: "Chiêm ngưỡng kỳ quan di sản kép Tràng An non nước hữu tình, du ngoạn Vịnh Hạ Long huyền ảo và chạm vào nét đẹp văn hiến thủ đô Hà Nội.",
    price: "3.890.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Hà Nội", "Quần thể Tràng An", "Chùa Bái Đính", "Vịnh Hạ Long", "Hang Sửng Sốt", "Đảo Ti Tốp"],
    highlights: ["Du thuyền thưởng ngoạn kỳ quan Vịnh Hạ Long", "Chèo thuyền xuyên hang động Tràng An", "Thưởng thức ẩm thực dê núi Ninh Bình & hải sản tươi sống"],
    slotsLeft: "Còn 6 chỗ khởi hành tuần này",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Cố Đô Hoa Lư – Quần thể Tràng An – Bái Đính",
        desc: "Xe và HDV TUATRAVEL đón quý khách tại điểm hẹn Hà Nội, khởi hành đi Ninh Bình. Đoàn viếng Chùa Bái Đính - ngôi chùa lớn nhất Đông Nam Á với nhiều kỷ lục. Buổi chiều, lên thuyền mộc khám phá Tràng An - di sản văn hóa và thiên nhiên thế giới với hệ thống hang động xuyên thủy kỳ bí. Tối thưởng thức đặc sản cơm cháy dê núi."
      },
      {
        day: "Ngày 2",
        title: "Ninh Bình – Vịnh Hạ Long – Du thuyền & Hang Sửng Sốt",
        desc: "Khởi hành đi Quảng Ninh. Trưa làm thủ tục nhận phòng trên du thuyền Hạ Long. Thưởng thức bữa trưa ngắm nhìn hàng ngàn hòn đảo đá vôi kỳ vĩ: Hòn Trống Mái, Đỉnh Hương. Thăm Hang Sửng Sốt - hang động đẹp nhất vịnh. Tự do chèo kayak hoặc tắm biển tại Đảo Ti Tốp. Tham gia tiệc hoàng hôn trên sundeck."
      },
      {
        day: "Ngày 3",
        title: "Hạ Long – Đón bình minh trên vịnh – Về lại Hà Nội",
        desc: "Tham gia lớp tập dưỡng sinh Thái Cực Quyền trên boong tàu đón bình minh rực rỡ. Ăn sáng nhẹ, du thuyền len lỏi qua các làng chài cổ. Trưa trả phòng, thưởng thức bữa trưa trên tàu trước khi cập bến. Xe đưa đoàn về lại điểm đón ban đầu tại Hà Nội. Kết thúc hành trình trọn vẹn."
      }
    ],
    included: [
      "Xe du lịch đời mới máy lạnh suốt hành trình",
      "01 đêm khách sạn tiêu chuẩn 3-4 sao tại Ninh Bình + 01 đêm du thuyền Hạ Long",
      "Các bữa ăn theo chương trình (05 bữa chính + 02 bữa sáng buffet)",
      "Vé tham quan, thuyền Tràng An, kayak Vịnh Hạ Long",
      "Hướng dẫn viên chuyên nghiệp nhiệt tình",
      "Bảo hiểm du lịch tối đa 50.000.000 đ/vụ",
      "Nước suối TUATRAVEL 02 chai/ngày"
    ],
    excluded: [
      "Vé máy bay khứ hồi đến Hà Nội (nếu khách từ miền Trung/Nam)",
      "Đồ uống gọi thêm trong các bữa ăn, giặt là, tip HDV",
      "Thuế VAT 8% (nếu lấy hóa đơn)"
    ]
  },
  {
    id: "tour-nb-02",
    name: "Hà Nội – Sa Pa – Fansipan",
    region: "north",
    regionName: "Miền Bắc",
    duration: "3 Ngày 2 Đêm",
    badge: "Săn mây Tây Bắc",
    image: "assets/images/fansipan.jpg",
    description: "Chinh phục 'Nóc nhà Đông Dương' Fansipan 3.143m ngợp mây trời, khám phá bản làng Cát Cát thơ mộng và hòa mình vào nhịp sống văn hóa vùng cao.",
    price: "3.450.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Hà Nội", "Thị xã Sa Pa", "Đỉnh Fansipan 3.143m", "Bản Cát Cát", "Nhà thờ Đá", "Đèo Ô Quy Hồ"],
    highlights: ["Tuyến cáp treo đạt kỷ lục thế giới lên đỉnh Fansipan", "Check-in cột cờ tổ quốc trên đỉnh mây vần", "Trải nghiệm văn hóa H'Mông và thưởng thức lẩu cá hồi Sa Pa"],
    slotsLeft: "Còn 4 chỗ khởi hành cuối tuần",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Cao tốc Nội Bài Lào Cai – Sa Pa xứ sở sương mù",
        desc: "Xe giường nằm VIP đón khách tại Hà Nội, di chuyển theo đường cao tốc Nội Bài - Lào Cai. Đến Sa Pa, nhận phòng khách sạn, dùng bữa trưa với món ngon vùng cao. Chiều dạo quanh Nhà thờ Đá cổ, bờ hồ Sa Pa và ngắm nhìn thị trấn thơ mộng."
      },
      {
        day: "Ngày 2",
        title: "Chinh phục Nóc nhà Đông Dương Fansipan – Bản Cát Cát",
        desc: "Xe đưa đoàn đến ga cáp treo Fansipan Legend. Trải nghiệm hệ thống cáp treo 3 dây vượt thung lũng Mường Hoa, chạm tay vào cột mốc 3.143m trên đỉnh Fansipan. Chiều thăm Bản Cát Cát của người H'Mông, chiêm ngưỡng thác nước Tiên Sa và guồng nước khổng lồ. Tối tự do khám phá chợ đêm Sa Pa."
      },
      {
        day: "Ngày 3",
        title: "Cổng trời Ô Quy Hồ – Mua sắm đặc sản – Trở về Hà Nội",
        desc: "Check-in Cổng trời đèo Ô Quy Hồ - một trong 'Tứ đại đỉnh đèo' hùng vĩ nhất Việt Nam. Mua sắm hạt dẻ nóng, nấm hương rừng, mận Bắc Hà. Ăn trưa và lên xe trở về Hà Nội lúc chiều tối."
      }
    ],
    included: [
      "Xe giường nằm VIP chất lượng cao khứ hồi Hà Nội - Sa Pa",
      "Khách sạn 3-4 sao trung tâm Sa Pa (2 khách/phòng)",
      "Vé cáp treo Sun World Fansipan khứ hồi",
      "Các bữa ăn tiêu chuẩn: 05 bữa chính + 02 bữa sáng",
      "Vé tham quan Bản Cát Cát, Ô Quy Hồ",
      "HDV am hiểu văn hóa bản địa, bảo hiểm du lịch trọn gói"
    ],
    excluded: [
      "Vé tàu hỏa leo núi Mường Hoa / đỉnh Fansipan (tùy chọn)",
      "Chi tiêu cá nhân, đồ uống trong bữa ăn",
      "Thuế VAT"
    ]
  },
  {
    id: "tour-nb-03",
    name: "Hà Giang – Đồng Văn – Mã Pí Lèng",
    region: "north",
    regionName: "Miền Bắc",
    duration: "3 Ngày 2 Đêm",
    badge: "Hùng quan cực Bắc",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80",
    description: "Vượt 'Đệ nhất hùng quan' đèo Mã Pí Lèng, lênh đênh sông Nho Quế xanh ngọc bích hẻm Tu Sản và chạm tay vào Cột cờ Lũng Cú linh thiêng.",
    price: "3.290.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Cột cờ Lũng Cú", "Hẻm vực Tu Sản", "Sông Nho Quế", "Đèo Mã Pí Lèng", "Dinh Thự Vua Mèo", "Phố Cổ Đồng Văn"],
    highlights: ["Du thuyền trên dòng Nho Quế màu xanh ngọc bích", "Chinh phục cung đường đèo Mã Pí Lèng huyền thoại", "Khám phá kiến trúc độc đáo Dinh thự họ Vương"],
    slotsLeft: "Còn 5 chỗ khởi hành thứ 6",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Hà Nội – Hà Giang – Cổng trời Quản Bạ – Đồng Văn",
        desc: "Khởi hành từ sáng sớm. Chụp ảnh lưu niệm tại Km0 Hà Giang. Qua Dốc Bắc Sum, dừng chân tại Cổng Trời Quản Bạ ngắm Núi Đôi Cô Tiên. Chiều vượt Dốc Cán Tỷ, ngắm cánh đồng tam giác mạch. Đến thị trấn Đồng Văn nhận phòng, tối dạo phố cổ."
      },
      {
        day: "Ngày 2",
        title: "Cực Bắc Lũng Cú – Dinh Vua Mèo – Đèo Mã Pí Lèng – Sông Nho Quế",
        desc: "Chinh phục Cột cờ Lũng Cú - điểm cực Bắc địa đầu Tổ quốc. Thăm Dinh thự Vua Mèo (Vương Chính Đức). Chiều vượt đèo Mã Pí Lèng hùng vĩ, xuống bến thuyền hẻm vực Tu Sản sâu nhất Đông Nam Á, ngắm nhìn dòng Nho Quế xanh biếc. Nghỉ đêm tại làng văn hóa Pả Vi."
      },
      {
        day: "Ngày 3",
        title: "Chợ phiên Đồng Văn – Dốc Thẩm Mã – Trở về Hà Nội",
        desc: "Dạo chơi chợ phiên rực rỡ sắc màu trang phục dân tộc. Chụp ảnh tại Dốc Thẩm Mã uốn lượn ngoạn mục. Dùng bữa trưa tại TP Hà Giang trước khi khởi hành về Hà Nội."
      }
    ],
    included: [
      "Xe du lịch đời mới phục vụ suốt tuyến Hà Nội - Hà Giang",
      "Khách sạn/Homestay cao cấp phong cách bản địa tại Đồng Văn và Mèo Vạc",
      "Vé thuyền du ngoạn sông Nho Quế",
      "Vé tham quan Cột cờ Lũng Cú, Dinh Vua Mèo",
      "Ăn uống trọn gói đặc sản Tây Bắc, HDV bản địa nhiệt huyết"
    ],
    excluded: [
      "Chi phí thuê xe máy tự lái (nếu có yêu cầu riêng)",
      "Chi phí cá nhân ngoài chương trình, tiền tip HDV"
    ]
  },

  // --- MIỀN TRUNG (4 TOURS) ---
  {
    id: "tour-mt-01",
    name: "Đà Nẵng – Bà Nà Hills – Hội An",
    region: "central",
    regionName: "Miền Trung",
    duration: "4 Ngày 3 Đêm",
    badge: "Bán chạy nhất",
    image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?auto=format&fit=crop&w=1200&q=80",
    description: "Sải bước trên Cầu Vàng Bà Nà Hills tựa chốn bồng lai tiên cảnh, thả hoa đăng lung linh phố cổ Hội An và tắm biển Mỹ Khê tuyệt đẹp.",
    price: "4.590.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Cầu Vàng Bà Nà Hills", "Phố cổ Hội An", "Bán đảo Sơn Trà", "Chùa Linh Ứng", "Biển Mỹ Khê", "Cầu Rồng Đà Nẵng"],
    highlights: ["Check-in Cầu Vàng - biểu tượng du lịch quốc tế", "Thả đèn hoa đăng cầu an trên sông Hoài Hội An", "Khách sạn 4 sao sát biển Mỹ Khê thơ mộng"],
    slotsLeft: "Còn 8 chỗ khởi hành thứ 5",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón sân bay Đà Nẵng – Bán đảo Sơn Trà – Biển Mỹ Khê",
        desc: "Đón quý khách tại sân bay Đà Nẵng. Khởi hành tham quan Bán đảo Sơn Trà, viếng Chùa Linh Ứng ngắm tượng Phật Bà Quan Âm cao nhất Việt Nam. Chiều tự do tắm biển Mỹ Khê. Tối ngắm Cầu Rồng phun lửa và nước (cuối tuần)."
      },
      {
        day: "Ngày 2",
        title: "Khám phá Sun World Bà Nà Hills – Làng Pháp – Cầu Vàng",
        desc: "Trọn vẹn 1 ngày tại Bà Nà Hills. Trải nghiệm tuyến cáp treo đạt nhiều kỷ lục thế giới, check-in Cầu Vàng nâng đỡ bởi bàn tay khổng lồ, thăm Hầm rượu Debay 100 năm tuổi, Vườn hoa Le Jardin D'Amour và khu vui chơi Fantasy Park. Thưởng thức buffet quốc tế hơn 100 món."
      },
      {
        day: "Ngày 3",
        title: "Ngũ Hành Sơn – Phố Cổ Hội An lung linh sắc đèn",
        desc: "Tham quan danh thắng Ngũ Hành Sơn, Làng đá mỹ nghệ Non Nước. Di chuyển đến Phố cổ Hội An: tham quan Chùa Cầu Nhật Bản, Nhà cổ Phùng Hưng, Hội quán Phúc Kiến. Tối dạo thuyền sông Hoài, thả đèn hoa đăng và thưởng thức cao lầu, mì Quảng."
      },
      {
        day: "Ngày 4",
        title: "Chợ Cồn đặc sản – Tiễn sân bay Đà Nẵng",
        desc: "Tự do tắm biển buổi sáng. Ghé chợ Hàn / chợ Cồn mua sắm hải sản khô, chả bò Đà Nẵng. Xe tiễn khách ra sân bay Đà Nẵng. Chào tạm biệt đoàn."
      }
    ],
    included: [
      "Khách sạn 4 sao ven biển Đà Nẵng (2 khách/phòng)",
      "Vé cáp treo Bà Nà Hills + Buffet trưa đỉnh Bà Nà trị giá 350.000 đ",
      "Xe du lịch máy lạnh chất lượng cao đón tiễn & phục vụ suốt tuyến",
      "Vé tham quan Ngũ Hành Sơn, vé vào phố cổ Hội An",
      "Bảo hiểm du lịch, HDV vui vẻ, tận tâm"
    ],
    excluded: [
      "Vé máy bay khứ hồi (TUATRAVEL hỗ trợ săn vé giá tốt)",
      "Chi phí tham quan Bảo tàng Sáp tại Bà Nà",
      "Thuế VAT"
    ]
  },
  {
    id: "tour-mt-02",
    name: "Huế – Đà Nẵng – Hội An",
    region: "central",
    regionName: "Miền Trung",
    duration: "4 Ngày 3 Đêm",
    badge: "Con đường Di sản",
    image: "https://images.unsplash.com/photo-1578637387939-43c525550085?auto=format&fit=crop&w=1200&q=80",
    description: "Hành trình di sản xuyên qua 3 thành phố lịch sử: Đại Nội Cố Đô Huế trầm mặc, ca Huế sông Hương, đèo Hải Vân và nét hoài cổ rêu phong Hội An.",
    price: "4.850.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Đại Nội Huế", "Lăng Khải Định", "Chùa Thiên Mụ", "Sông Hương", "Đèo Hải Vân", "Phố Cổ Hội An"],
    highlights: ["Nghe ca Huế trên thuyền rồng sông Hương", "Thưởng thức ẩm thực cung đình Huế và đặc sản miền Trung", "Chiêm ngưỡng kiến trúc tinh xảo Lăng Khải Định & Đại Nội"],
    slotsLeft: "Còn 5 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón khách Huế – Đại Nội Hoàng Cung – Thuyền rồng Ca Huế",
        desc: "Đón khách tại sân bay Phú Bài hoặc ga Huế. Khám phá Đại Nội Huế - kinh đô cuối cùng của phong kiến Việt Nam: Ngọ Môn, Điện Thái Hòa, Tử Cấm Thành. Chiều thăm Chùa Thiên Mụ cổ kính bên bờ sông Hương. Tối lên thuyền rồng nghe ca Huế và thả hoa đăng."
      },
      {
        day: "Ngày 2",
        title: "Lăng Khải Định – Vượt Đèo Hải Vân – Đà Nẵng",
        desc: "Thăm Lăng Khải Định với nghệ thuật ghép sành sứ đỉnh cao. Khởi hành đi Đà Nẵng, vượt cung đèo Hải Vân ngoạn mục ngắm vịnh Lăng Cô từ trên cao. Chiều đến Đà Nẵng nhận phòng khách sạn, tắm biển Mỹ Khê."
      },
      {
        day: "Ngày 3",
        title: "Bán đảo Sơn Trà – Khám phá Phố cổ Hội An",
        desc: "Buổi sáng viếng Linh Ứng Tự Sơn Trà. Chiều khởi hành đi Hội An, tản bộ ngắm phố đèn lồng rực rỡ, thưởng thức đặc sản cơm gà Bà Buội, bánh mì Phượng. Trở về Đà Nẵng nghỉ ngơi."
      },
      {
        day: "Ngày 4",
        title: "Mua sắm đặc sản Cố Đô – Tiễn sân bay",
        desc: "Tự do tham quan và mua sắm trà cung đình Huế, mè xửng, tré Đà Nẵng. Xe tiễn khách ra sân bay Đà Nẵng kết thúc tour trọn vẹn."
      }
    ],
    included: [
      "Khách sạn 3-4 sao tiện nghi (01 đêm tại Huế + 02 đêm tại Đà Nẵng)",
      "Xe du lịch đời mới máy lạnh toàn hành trình",
      "Thuyền rồng và biểu diễn ca Huế trên sông Hương",
      "Vé tham quan tất cả các di tích có trong chương trình",
      "Các bữa ăn tiêu chuẩn đặc sản vùng miền, HDV di sản chuyên nghiệp"
    ],
    excluded: ["Vé máy bay khứ hồi", "Chi phí cá nhân", "Thuế VAT"]
  },
  {
    id: "tour-mt-03",
    name: "Quy Nhơn – Kỳ Co – Eo Gió",
    region: "central",
    regionName: "Miền Trung",
    duration: "3 Ngày 2 Đêm",
    badge: "Biển xanh ngọc bích",
    image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?auto=format&fit=crop&w=1200&q=80",
    description: "Chiêm ngưỡng 'Maldives Việt Nam' tại bãi biển Kỳ Co trong vắt, con đường ven biển ngắm hoàng hôn lộng gió Eo Gió và hải sản tươi rói.",
    price: "3.690.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Bãi biển Kỳ Co", "Eo Gió Nhơn Lý", "Ghềnh Ráng Tiên Sa", "Tịnh Xá Ngọc Hòa", "Tháp Đôi Chăm Pa"],
    highlights: ["Cano cao tốc vượt biển ngắm san hô Bãi Dứa", "Check-in cung đường đi bộ ven biển ngoạn mục tại Eo Gió", "Thưởng thức đại tiệc hải sản tươi sống 8 món ngon bậc nhất"],
    slotsLeft: "Còn 6 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón sân bay Phù Cát – Ghềnh Ráng Tiên Sa – Tháp Đôi",
        desc: "Đón khách tại sân bay Phù Cát. Thăm Khu du lịch Ghềnh Ráng Tiên Sa, dốc Mộng Cầm, viếng mộ thi sĩ Hàn Mặc Tử, bãi tắm Hoàng Hậu với những viên đá cuội nhẵn mịn. Thăm Tháp Đôi kiến trúc Chăm Pa huyền bí giữa lòng thành phố."
      },
      {
        day: "Ngày 2",
        title: "Cano vượt biển Kỳ Co – Lặn ngắm san hô – Eo Gió",
        desc: "Lên cano cao tốc đến Kỳ Co - thiên đường biển xanh cát vàng. Tự do tắm biển, tham gia trò chơi thể thao nước. Cano đưa đoàn đến Bãi Dứa lặn ngắm san hô rực rỡ sắc màu. Trưa thưởng thức tiệc hải sản tại Nhơn Lý. Chiều check-in Eo Gió và viếng Tịnh Xá Ngọc Hòa với tượng Phật Đôi lớn nhất Việt Nam."
      },
      {
        day: "Ngày 3",
        title: "Đồi cát Phương Mai – Mua sắm đặc sản – Tiễn sân bay",
        desc: "Trượt cát tại Đồi cát Phương Mai bạt ngàn. Mua đặc sản bánh ít lá gai, tré rơm Quy Nhơn. Xe tiễn khách ra sân bay Phù Cát."
      }
    ],
    included: [
      "Xe máy lạnh đưa đón sân bay và tham quan",
      "Khách sạn 3-4 sao sát biển Quy Nhơn",
      "Cano cao tốc khứ hồi Kỳ Co + áo phao, kính lặn san hô",
      "Bữa trưa hải sản tươi sống chất lượng cao",
      "Vé tham quan các điểm, HDV vui tính"
    ],
    excluded: ["Vé máy bay", "Trò chơi môtô nước cá nhân", "Thuế VAT"]
  },
  {
    id: "tour-mt-04",
    name: "Phú Yên – Gành Đá Đĩa – Mũi Điện",
    region: "central",
    regionName: "Miền Trung",
    duration: "3 Ngày 2 Đêm",
    badge: "Xứ hoa vàng cỏ xanh",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "Đón những tia nắng bình minh đầu tiên trên đất liền Việt Nam tại Mũi Điện, ngắm kỳ quan núi lửa Gành Đá Đĩa và phim trường Bãi Xép lãng mạn.",
    price: "3.550.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Gành Đá Đĩa", "Mũi Điện Hải Đăng", "Bãi Xép - Gành Ông", "Vịnh Vũng Rô", "Tháp Nghinh Phong"],
    highlights: ["Kỳ quan địa chất Gành Đá Đĩa độc nhất vô nhị", "Đón bình minh Cực Đông Tổ Quốc tại Mũi Đại Lãnh", "Thưởng thức mắt cá ngừ đại dương trứ danh"],
    slotsLeft: "Còn 4 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón sân bay Tuy Hòa – Bãi Xép Gành Ông – Tháp Nghinh Phong",
        desc: "Đón khách tại sân bay Tuy Hòa. Tham quan Bãi Xép - Gành Ông, khung cảnh tuyệt sắc trong bộ phim 'Tôi thấy hoa vàng trên cỏ xanh'. Check-in Tháp Nghinh Phong - công trình kiến trúc biểu tượng mới đầy tự hào của Phú Yên."
      },
      {
        day: "Ngày 2",
        title: "Đón bình minh Mũi Điện – Vịnh Vũng Rô – Bè nổi hải sản",
        desc: "Sáng sớm chinh phục Hải đăng Mũi Điện (Mũi Đại Lãnh) đón ánh bình minh sớm nhất đất liền. Thăm di tích bến Tàu Không Số Vịnh Vũng Rô huyền thoại. Ăn trưa hải sản trên bè nổi vịnh Vũng Rô. Chiều tắm biển Bãi Môn."
      },
      {
        day: "Ngày 3",
        title: "Kỳ quan Gành Đá Đĩa – Nhà thờ Mằng Lăng – Tiễn sân bay",
        desc: "Khám phá Gành Đá Đĩa - tuyệt tác tạo hóa từ dòng dung nham bazan hàng triệu năm trước. Thăm Nhà thờ Mằng Lăng cổ kính nơi lưu giữ cuốn sách chữ Quốc ngữ đầu tiên. Mua sắm bò một nắng muối kiến vàng trước khi tiễn sân bay."
      }
    ],
    included: [
      "Xe ô tô đưa đón theo lịch trình",
      "Khách sạn sát biển trung tâm Tuy Hòa",
      "Vé tham quan Mũi Điện, Gành Đá Đĩa, Bãi Xép",
      "Bữa ăn theo chương trình kèm đặc sản mắt cá ngừ đại dương",
      "Bảo hiểm du lịch, HDV bản xứ"
    ],
    excluded: ["Vé máy bay", "Chi tiêu cá nhân", "Thuế VAT"]
  },

  // --- MIỀN NAM (3 TOURS) ---
  {
    id: "tour-mn-01",
    name: "TP.HCM – Mỹ Tho – Bến Tre – Cần Thơ",
    region: "south",
    regionName: "Miền Nam",
    duration: "2 Ngày 1 Đêm",
    badge: "Văn hóa sông nước",
    image: "assets/images/mientay.jpg",
    description: "Chèo xuồng ba lá len lỏi rạch dừa nước rợp bóng, thưởng thức đờn ca tài tử Nam Bộ và khám phá chợ nổi Cái Răng tấp nập buổi sớm mai.",
    price: "1.890.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Cù Lao Thới Sơn", "Lò kẹo dừa Bến Tre", "Bến Ninh Kiều Cần Thơ", "Chợ nổi Cái Răng", "Vườn trái cây miệt vườn"],
    highlights: ["Ngồi xuồng ba lá xuyên rừng dừa nước Bến Tre", "Trải nghiệm văn hóa buôn bán trên sông tại Chợ nổi Cái Răng", "Thưởng thức cá lóc nướng trui & lẩu mắm đậm đà"],
    slotsLeft: "Còn 7 chỗ cuối tuần",
    itinerary: [
      {
        day: "Ngày 1",
        title: "TP.HCM – Tiền Giang – Bến Tre xứ dừa – Du thuyền Tây Đô",
        desc: "Xe đón khách tại TP.HCM/Đồng Nai khởi hành đi Tiền Giang. Đi thuyền máy trên sông Tiền ngắm Tứ linh Long - Lân - Quy - Phụng. Sang Bến Tre, ngồi xuồng chèo len lỏi qua rạch dừa nước xanh mát. Thăm lò làm kẹo dừa truyền thống, thưởng thức trà mật ong hoa nhãn và nghe đờn ca tài tử. Chiều di chuyển về Cần Thơ, tối dạo bến Ninh Kiều, ăn tối trên du thuyền Cần Thơ ngắm cầu Cần Thơ lung linh."
      },
      {
        day: "Ngày 2",
        title: "Chợ nổi Cái Răng – Vườn trái cây trĩu quả – Về lại TP.HCM",
        desc: "Sáng sớm đi thuyền tham quan Chợ nổi Cái Răng - nét văn hóa giao thương độc đáo với 'cây bẹo' chào hàng. Thưởng thức tô hủ tiếu nóng hổi ngay trên thuyền nổi. Ghé thăm lò hủ tiếu truyền thống và vườn trái cây trĩu quả (chôm chôm, sầu riêng, bưởi da xanh). Dùng cơm trưa cá lóc nướng trui. Xe đưa đoàn về lại điểm đón."
      }
    ],
    included: [
      "Xe du lịch đời mới đưa đón suốt hành trình",
      "Khách sạn 3 sao trung tâm TP Cần Thơ (gần bến Ninh Kiều)",
      "Thuyền lớn trên sông Tiền + xuồng chèo ba lá + thuyền chợ nổi Cái Răng",
      "Bữa ăn đặc sản miền Tây + 01 bữa tối trên du thuyền Cần Thơ",
      "Trái cây miệt vườn, trà mật ong, đờn ca tài tử, HDV địa phương"
    ],
    excluded: ["Chi tiêu cá nhân, mua trái cây mang về", "Thuế VAT"]
  },
  {
    id: "tour-mn-02",
    name: "Phú Quốc – Hòn Thơm – Bãi Sao",
    region: "south",
    regionName: "Miền Nam",
    duration: "3 Ngày 2 Đêm",
    badge: "Thiên đường nghỉ dưỡng",
    image: "assets/images/phu-quoc.jpg",
    description: "Tận hưởng làn nước ngọc bích Bãi Sao, vi vu cáp treo vượt biển 3 dây Hòn Thơm dài nhất thế giới và check-in Cầu Hôn rực rỡ tại Sunset Town.",
    price: "4.290.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Bãi Sao cát trắng", "Cáp treo Hòn Thơm", "Thị trấn Hoàng Hôn (Sunset Town)", "Cầu Hôn Kiss Bridge", "Tour cano 4 đảo"],
    highlights: ["Cano 4 đảo kèm tặng gói quay flycam & chụp ảnh sống ảo", "Cáp treo vượt biển Hòn Thơm ngắm trọn biển trời Nam đảo", "Chiêm ngưỡng hoàng hôn rực lửa tại Cầu Hôn"],
    slotsLeft: "Còn 3 chỗ khởi hành đợt này",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón sân bay Phú Quốc – Dinh Cậu – Chợ đêm Phú Quốc",
        desc: "Đón quý khách tại sân bay Phú Quốc, nhận phòng resort/khách sạn. Thăm Di tích Dinh Cậu, ngắm cảnh hoàng hôn buông xuống biển Tây. Buổi tối tự do khám phá Chợ đêm Phú Quốc, thưởng thức ghẹ Hàm Ninh, nhum nướng mỡ hành."
      },
      {
        day: "Ngày 2",
        title: "Cano 4 đảo VIP – Cáp treo Hòn Thơm – Sunset Town",
        desc: "Lên cano cao tốc lướt sóng khám phá 4 hòn đảo đẹp nhất: Hòn Móng Tay, Hòn Mây Rút, Hòn Gầm Ghì. Lặn ngắm rạn san hô tự nhiên, tặng clip flycam kỷ niệm. Đi cáp treo Hòn Thơm ngắm toàn cảnh Nam Đảo từ trên cao. Buổi chiều dạo chơi Thị trấn Hoàng Hôn phong cách Địa Trung Hải, check-in Cầu Hôn."
      },
      {
        day: "Ngày 3",
        title: "Nghỉ dưỡng Bãi Sao – Nhà thùng nước mắm – Tiễn sân bay",
        desc: "Thư giãn tại Bãi Sao - bãi biển cát trắng mịn nhất đảo ngọc. Thăm nhà thùng nước mắm truyền thống Phú Quốc, trang trại nuôi cấy ngọc trai. Tiễn khách ra sân bay Phú Quốc."
      }
    ],
    included: [
      "Khách sạn/Resort 3-4 sao tiện nghi (2 khách/phòng)",
      "Cano cao tốc đi 4 đảo kèm flycam quay video chuyên nghiệp",
      "Vé cáp treo Sun World Hòn Thơm khứ hồi",
      "Xe đưa đón chất lượng cao suốt tuyến tại Phú Quốc",
      "Các bữa ăn tiêu chuẩn, HDV nhiệt huyết hỗ trợ chụp ảnh"
    ],
    excluded: ["Vé máy bay", "Vé xem show Kiss The Stars (tùy chọn)", "Thuế VAT"]
  },
  {
    id: "tour-mn-03",
    name: "Vũng Tàu – Hồ Tràm",
    region: "south",
    regionName: "Miền Nam",
    duration: "2 Ngày 1 Đêm",
    badge: "Cuối tuần thư giãn",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80",
    description: "Hành trình nghỉ dưỡng xanh tái tạo năng lượng với bờ cát trắng Hồ Tràm hoang sơ, tắm khoáng nóng Bình Châu và ngắm cảnh biển Vũng Tàu.",
    price: "1.990.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Bãi biển Hồ Tràm", "Khoáng nóng Minera Bình Châu", "Hải đăng Vũng Tàu", "Mũi Nghinh Phong", "Tượng Chúa Kito"],
    highlights: ["Ngâm khoáng nóng thiên nhiên phục hồi sức khỏe", "Check-in Mũi Nghinh Phong đón gió đại dương", "Thưởng thức hải sản tươi ngon chợ Xóm Lưới"],
    slotsLeft: "Còn 6 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đồng Nai/TP.HCM – Hồ Tràm nguyên sơ – Khoáng nóng Bình Châu",
        desc: "Đón khách khởi hành đi Hồ Tràm. Trải nghiệm tắm khoáng nóng và luộc trứng gà tại suối nước nóng thiên nhiên Bình Châu, thư giãn tái tạo năng lượng. Nhận phòng resort Hồ Tràm, tự do dạo bãi biển cát mịn hoang sơ. Tối thưởng thức tiệc BBQ hải sản."
      },
      {
        day: "Ngày 2",
        title: "Thành phố biển Vũng Tàu – Hải Đăng – Mũi Nghinh Phong",
        desc: "Di chuyển về Vũng Tàu. Chinh phục ngọn Hải Đăng cổ nhất Việt Nam ngắm nhìn toàn cảnh phố biển. Thăm Mũi Nghinh Phong, Cổng Trời Vũng Tàu. Thưởng thức bánh khọt Gốc Vú Sữa trứ danh. Mua sắm hải sản trước khi khởi hành về lại."
      }
    ],
    included: [
      "Xe du lịch đời mới máy lạnh đón tiễn từ Đồng Nai/TP.HCM",
      "Khách sạn/Resort tiện nghi gần biển",
      "Vé vào cổng suối khoáng nóng Bình Châu",
      "Các bữa ăn tiêu chuẩn hải sản tươi sống",
      "HDV phục vụ chu đáo, nước uống khăn lạnh"
    ],
    excluded: ["Dịch vụ tắm bùn cao cấp (tùy chọn)", "Chi tiêu cá nhân"]
  },

  // --- CAO NGUYÊN (3 TOURS) ---
  {
    id: "tour-cn-01",
    name: "Đà Lạt – Langbiang – Hồ Tuyền Lâm",
    region: "highland",
    regionName: "Cao nguyên",
    duration: "3 Ngày 2 Đêm",
    badge: "Thành phố ngàn hoa",
    image: "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80",
    description: "Thả hồn giữa đồi thông xanh ngắt, săn mây bồng bềnh, chinh phục đỉnh núi Langbiang huyền thoại và ngắm mặt nước phẳng lặng Hồ Tuyền Lâm.",
    price: "2.890.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Đỉnh núi Langbiang", "Hồ Tuyền Lâm", "Thiền Viện Trúc Lâm", "Quảng trường Lâm Viên", "Ga Đà Lạt", "Chợ đêm Đà Lạt"],
    highlights: ["Xe jeep địa hình chinh phục đỉnh Langbiang huyền thoại", "Check-in Quảng trường Lâm Viên hoa dã quỳ khổng lồ", "Thưởng thức lẩu gà lá é ấm nồng giữa tiết trời se lạnh"],
    slotsLeft: "Còn 5 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón khách Đà Lạt – Quảng trường Lâm Viên – Ga Đà Lạt",
        desc: "Đón quý khách tại sân bay Liên Khương hoặc bến xe Đà Lạt. Nhận phòng khách sạn nghỉ ngơi. Chiều check-in Quảng trường Lâm Viên biểu tượng nụ hoa Atiso và hoa Dã Quỳ. Thăm Ga Đà Lạt cổ kính với đầu tàu hơi nước độc đáo. Tối thưởng thức lẩu gà lá é Tao Ngộ."
      },
      {
        day: "Ngày 2",
        title: "Chinh phục đỉnh Langbiang – Hồ Tuyền Lâm – Trúc Lâm Thiền Viện",
        desc: "Trải nghiệm xe jeep địa hình băng qua rừng thông lên đỉnh núi Langbiang ngắm trọn thung lũng Suối Vàng. Chiều thăm Thiền Viện Trúc Lâm và dạo thuyền ngắm cảnh thơ mộng tại Hồ Tuyền Lâm. Tối hòa mình vào chợ đêm Đà Lạt nhộn nhịp, nhâm nhi sữa đậu nành nóng."
      },
      {
        day: "Ngày 3",
        title: "Puppy Farm – Vườn dâu tây – Mua mứt Đà Lạt",
        desc: "Tham quan nông trại cún cưng Puppy Farm, chụp ảnh vườn hoa cẩm tú cầu rực rỡ và tự tay hái dâu tây chín mọng tại vườn. Mua sắm mứt Atiso, hoa quả sấy làm quà. Xe tiễn khách kết thúc chuyến đi."
      }
    ],
    included: [
      "Khách sạn 3 sao trung tâm Đà Lạt (gần chợ đêm)",
      "Xe du lịch đời mới máy lạnh phục vụ theo tour",
      "Xe jeep đưa lên đỉnh Langbiang khứ hồi",
      "Vé vào cổng tất cả các điểm tham quan",
      "Các bữa ăn tiêu chuẩn đặc sản Đà Lạt, HDV chu đáo"
    ],
    excluded: ["Vé máy bay/xe khách đến Đà Lạt", "Chi phí hái dâu mang về theo cân", "Thuế VAT"]
  },
  {
    id: "tour-cn-02",
    name: "Đà Lạt – Bảo Lộc",
    region: "highland",
    regionName: "Cao nguyên",
    duration: "2 Ngày 1 Đêm",
    badge: "Đồi chè & Thác ngàn",
    image: "https://images.unsplash.com/photo-1511497584788-87676104235f?auto=format&fit=crop&w=1200&q=80",
    description: "Hành trình 'chậm lại giữa đại ngàn' mát lạnh, ngắm đồi chè bát ngát hương thơm, thác Dambri hùng vĩ và Linh Quy Pháp Ấn tựa chốn bồng lai.",
    price: "2.190.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Đồi chè Tâm Châu Bảo Lộc", "Thác Dambri hùng vĩ", "Chùa Linh Quy Pháp Ấn (Cổng Trời)", "Hồ Xuân Hương Đà Lạt"],
    highlights: ["Ngắm thác Dambri cuồn cuộn bọt trắng xóa giữa rừng già", "Săn mây tại Cổng Trời Linh Quy Pháp Ấn huyền ảo", "Thưởng thức trà Ô Long Bảo Lộc thơm lừng"],
    slotsLeft: "Còn 6 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Khởi hành đi Bảo Lộc – Thác Dambri – Đồi chè Tâm Châu",
        desc: "Đoàn khởi hành từ sáng sớm. Đến thành phố trà Bảo Lộc, tham quan Quần thể Thác Dambri - ngọn thác cao và hùng vĩ nhất Lâm Đồng với hệ thống máng trượt hiện đại. Chiều dạo bước giữa Đồi chè Tâm Châu xanh ngút ngàn, thưởng thức trà Ô Long thượng hạng. Di chuyển lên Đà Lạt nhận phòng nghỉ ngơi."
      },
      {
        day: "Ngày 2",
        title: "Đón bình minh Linh Quy Pháp Ấn – Dạo quanh Đà Lạt – Trở về",
        desc: "Buổi sớm mai viếng Chùa Linh Quy Pháp Ấn, chiêm ngưỡng Cổng Trời bồng bềnh trong sương mù mờ ảo. Sau đó dạo quanh Hồ Xuân Hương, nhâm nhi cà phê ngắm cảnh hồ tĩnh lặng. Xe đưa đoàn về lại điểm đón ban đầu."
      }
    ],
    included: [
      "Xe du lịch máy lạnh chất lượng cao suốt tuyến",
      "Khách sạn tiêu chuẩn tại Bảo Lộc / Đà Lạt",
      "Vé tham quan quần thể thác Dambri kèm máng trượt",
      "Bữa ăn theo chương trình đậm vị phố núi",
      "HDV nhiệt tình, bảo hiểm du lịch trọn gói"
    ],
    excluded: ["Chi phí cá nhân", "Đồ uống ngoài thực đơn", "Thuế VAT"]
  },
  {
    id: "tour-cn-03",
    name: "Kon Tum – Măng Đen",
    region: "highland",
    regionName: "Cao nguyên",
    duration: "3 Ngày 2 Đêm",
    badge: "Nàng thơ đại ngàn",
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
    description: "Khám phá Măng Đen nguyên sơ giữa rừng thông đại ngàn, viếng Đức Mẹ Măng Đen, ngắm thác Pa Sỹ thơ mộng và Nhà thờ Gỗ Kon Tum trăm năm tuổi.",
    price: "3.390.000 đ",
    priceNote: "[Giá tham khảo - Vui lòng liên hệ cập nhật ưu đãi]",
    destinations: ["Khu du lịch sinh thái Măng Đen", "Thác Pa Sỹ", "Chùa Khánh Lâm", "Nhà thờ Gỗ Kon Tum", "Cầu treo Kon Klor", "Làng văn hóa Kon K'tu"],
    highlights: ["Hít thở không khí trong lành tại Đà Lạt thứ 2 của Tây Nguyên", "Thưởng thức gà nướng cơm lam Măng Đen và rượu cần Ba Na", "Chiêm ngưỡng kiến trúc độc bản Nhà thờ Gỗ Kon Tum trên 110 năm"],
    slotsLeft: "Còn 4 chỗ",
    itinerary: [
      {
        day: "Ngày 1",
        title: "Đón sân bay Pleiku – Kon Tum – Lên cao nguyên Măng Đen",
        desc: "Đón khách tại Pleiku/Kon Tum. Thăm Nhà thờ Gỗ Kon Tum hơn 100 năm tuổi làm hoàn toàn bằng gỗ cà chít. Check-in Cầu treo Kon Klor bắc qua dòng sông Đăk Bla huyền thoại. Lên đường đến Măng Đen nằm ở độ cao 1.200m giữa rừng thông đại ngàn. Buổi tối thưởng thức gà nướng cơm lam và lẩu xuyên tiêu."
      },
      {
        day: "Ngày 2",
        title: "Thác Pa Sỹ – Đức Mẹ Măng Đen – Chùa Khánh Lâm thanh tịnh",
        desc: "Sáng sớm ngắm sương mù phủ kín đồi thông. Viếng Tượng Đức Mẹ Măng Đen linh thiêng. Thăm Thác Pa Sỹ trong veo tuôn trào giữa thung lũng xanh. Chiều leo bậc thang vãn cảnh Chùa Khánh Lâm trang nghiêm giữa ngàn thông. Tối tham gia giao lưu cồng chiêng lửa trại (đối với đoàn)."
      },
      {
        day: "Ngày 3",
        title: "Nông trại sinh thái Măng Đen – Tiễn đoàn",
        desc: "Tham quan vườn dâu tây công nghệ cao Măng Đen, nông trại rau quả sạch. Mua sắm mật ong rừng, sâm dây Ngọc Linh quý hiếm. Xe tiễn khách ra sân bay Pleiku/bến xe."
      }
    ],
    included: [
      "Xe du lịch phục vụ suốt tuyến Kon Tum - Măng Đen",
      "Khách sạn/Resort sinh thái giữa rừng thông Măng Đen",
      "Vé tham quan KDL Thác Pa Sỹ, các danh thắng",
      "Các bữa ăn tiêu chuẩn đặc sản Tây Nguyên (gà nướng cơm lam, cá tầm)",
      "HDV am hiểu văn hóa cồng chiêng, bảo hiểm du lịch trọn gói"
    ],
    excluded: ["Vé máy bay đến Pleiku", "Chi tiêu cá nhân", "Thuế VAT"]
  }
];

// 2. DOM INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderTours("all");
  setupFilters();
  setupCountdown();
  setupFormValidation();
  setupModals();
  setupScrollEffects();
  setupAccordion();
  populateDestinationDropdown();
});

// 3. RENDER TOUR CARDS
function renderTours(filterRegion = "all") {
  const container = document.getElementById("tourGrid");
  if (!container) return;

  const filtered = filterRegion === "all" 
    ? TOURS_DATA 
    : TOURS_DATA.filter(t => t.region === filterRegion);

  container.innerHTML = "";

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-500">
        <i class="fa-solid fa-compass text-4xl mb-3 text-cyan-600"></i>
        <p class="text-lg">Không tìm thấy tour phù hợp trong khu vực này. Vui lòng chọn lại bộ lọc.</p>
      </div>
    `;
    return;
  }

  filtered.forEach(tour => {
    const card = document.createElement("div");
    card.className = "travel-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 flex flex-col justify-between group";
    card.setAttribute("data-region", tour.region);

    card.innerHTML = `
      <div>
        <!-- Image & Badges -->
        <div class="relative h-56 overflow-hidden">
          <img 
            src="${tour.image}" 
            alt="${tour.name}" 
            class="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
            loading="lazy"
            onerror="this.src='assets/images/fansipan.jpg'"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-black/20"></div>
          
          <!-- Top Badges -->
          <div class="absolute top-3 left-3 flex flex-wrap gap-2">
            <span class="bg-cyan-700/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider shadow">
              ${tour.regionName}
            </span>
            ${tour.badge ? `
              <span class="bg-amber-500/90 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-full shadow">
                <i class="fa-solid fa-star text-[10px] mr-1"></i>${tour.badge}
              </span>
            ` : ''}
          </div>

          <div class="absolute bottom-3 right-3 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-2.5 py-1 rounded-lg">
            <i class="fa-regular fa-clock mr-1"></i>${tour.duration}
          </div>
        </div>

        <!-- Body -->
        <div class="p-5">
          <h3 class="text-xl font-bold text-slate-800 group-hover:text-cyan-700 transition-colors line-clamp-1 mb-2 font-heading">
            ${tour.name}
          </h3>
          <p class="text-slate-600 text-sm line-clamp-2 mb-4 leading-relaxed">
            ${tour.description}
          </p>

          <!-- Key Highlights -->
          <div class="space-y-1.5 mb-4 text-xs text-slate-700">
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-location-dot text-cyan-600 w-4 text-center"></i>
              <span class="truncate">${tour.destinations.slice(0, 3).join(" • ")}...</span>
            </div>
            <div class="flex items-center gap-2">
              <i class="fa-solid fa-shield-halved text-emerald-600 w-4 text-center"></i>
              <span>Trọn gói di chuyển, khách sạn & vé tham quan</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer & Action Buttons -->
      <div class="p-5 pt-0 border-t border-slate-100 mt-2 bg-slate-50/50">
        <div class="flex items-baseline justify-between py-3">
          <div>
            <span class="text-xs text-slate-500 block">Giá từ</span>
            <span class="text-xl font-extrabold text-cyan-800">${tour.price}</span>
          </div>
          <span class="text-[11px] text-amber-600 font-medium bg-amber-50 border border-amber-200 px-2 py-0.5 rounded">
            <i class="fa-solid fa-fire text-amber-500 mr-1"></i>${tour.slotsLeft}
          </span>
        </div>

        <div class="grid grid-cols-2 gap-2 mt-1">
          <button 
            onclick="openTourModal('${tour.id}')"
            class="w-full py-2.5 px-3 rounded-xl border border-cyan-600 text-cyan-700 font-semibold text-xs text-center hover:bg-cyan-50 transition-colors cursor-pointer flex items-center justify-center gap-1.5"
          >
            <i class="fa-regular fa-eye"></i> Xem chi tiết
          </button>

          <button 
            onclick="selectTourAndScroll('${tour.name}')"
            class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-cyan-600 to-cyan-800 text-white font-semibold text-xs text-center hover:from-cyan-700 hover:to-cyan-900 shadow hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
          >
            <i class="fa-solid fa-paper-plane"></i> Đăng ký tư vấn
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// 4. FILTER TABS HANDLER
function setupFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Toggle active states
      buttons.forEach(b => {
        b.classList.remove("active", "bg-cyan-700", "text-white", "shadow-md");
        b.classList.add("bg-white", "text-slate-700", "border-slate-200");
      });

      btn.classList.add("active", "bg-cyan-700", "text-white", "shadow-md");
      btn.classList.remove("bg-white", "text-slate-700", "border-slate-200");

      const region = btn.getAttribute("data-filter");
      renderTours(region);
    });
  });
}

// 5. TOUR DETAILS MODAL
function openTourModal(tourId) {
  const tour = TOURS_DATA.find(t => t.id === tourId);
  if (!tour) return;

  const modal = document.getElementById("tourDetailModal");
  const content = document.getElementById("tourModalContent");
  if (!modal || !content) return;

  // Build Itinerary HTML
  const itineraryHtml = tour.itinerary.map(item => `
    <div class="relative pl-7 pb-6 border-l-2 border-cyan-200 last:border-0 last:pb-0">
      <div class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow"></div>
      <div class="font-bold text-slate-800 text-base mb-1">
        <span class="text-cyan-700 font-extrabold mr-1">${item.day}:</span> ${item.title}
      </div>
      <p class="text-slate-600 text-sm leading-relaxed">${item.desc}</p>
    </div>
  `).join("");

  // Build Included Services
  const includedHtml = tour.included.map(inc => `
    <li class="flex items-start gap-2 text-sm text-slate-700">
      <i class="fa-solid fa-circle-check text-emerald-500 mt-0.5"></i>
      <span>${inc}</span>
    </li>
  `).join("");

  // Build Excluded Services
  const excludedHtml = tour.excluded.map(exc => `
    <li class="flex items-start gap-2 text-sm text-slate-600">
      <i class="fa-solid fa-circle-xmark text-rose-400 mt-0.5"></i>
      <span>${exc}</span>
    </li>
  `).join("");

  content.innerHTML = `
    <!-- Modal Header Image -->
    <div class="relative h-64 sm:h-80 w-full overflow-hidden">
      <img src="${tour.image}" alt="${tour.name}" class="w-full h-full object-cover" />
      <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-black/30"></div>
      
      <button onclick="closeTourModal()" class="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-colors">
        <i class="fa-solid fa-xmark text-lg"></i>
      </button>

      <div class="absolute bottom-5 left-5 right-5 text-white">
        <div class="flex items-center gap-2 mb-2">
          <span class="bg-cyan-600 px-3 py-1 rounded-full text-xs font-semibold">${tour.regionName}</span>
          <span class="bg-amber-500 px-2.5 py-1 rounded-full text-xs font-medium">${tour.duration}</span>
        </div>
        <h2 class="text-2xl sm:text-3xl font-extrabold text-white font-heading">${tour.name}</h2>
      </div>
    </div>

    <!-- Modal Body Content -->
    <div class="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
      <!-- Overview & Highlights -->
      <div>
        <h3 class="text-lg font-bold text-slate-800 mb-2 flex items-center gap-2 font-heading">
          <i class="fa-solid fa-circle-info text-cyan-600"></i> Giới thiệu hành trình
        </h3>
        <p class="text-slate-600 leading-relaxed text-sm sm:text-base">${tour.description}</p>
        
        <div class="mt-4 p-4 bg-cyan-50/60 rounded-xl border border-cyan-100">
          <span class="font-semibold text-xs uppercase text-cyan-800 tracking-wider block mb-2">Các điểm nổi bật trong tour:</span>
          <div class="flex flex-wrap gap-2">
            ${tour.destinations.map(d => `<span class="bg-white border border-cyan-200 text-cyan-900 text-xs px-3 py-1 rounded-full font-medium shadow-sm"><i class="fa-solid fa-location-dot text-cyan-600 mr-1"></i>${d}</span>`).join("")}
          </div>
        </div>
      </div>

      <!-- Detailed Day-by-Day Itinerary -->
      <div>
        <h3 class="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2 font-heading">
          <i class="fa-solid fa-calendar-day text-cyan-600"></i> Lịch trình chi tiết từng ngày
        </h3>
        <div class="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
          ${itineraryHtml}
        </div>
      </div>

      <!-- Services Grid: Included & Excluded -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100">
          <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2 font-heading">
            <i class="fa-solid fa-check-double text-emerald-600"></i> Dịch vụ bao gồm
          </h4>
          <ul class="space-y-2">
            ${includedHtml}
          </ul>
        </div>

        <div class="bg-rose-50/40 p-5 rounded-2xl border border-rose-100">
          <h4 class="font-bold text-rose-800 text-sm uppercase tracking-wider mb-3 flex items-center gap-2 font-heading">
            <i class="fa-solid fa-ban text-rose-500"></i> Dịch vụ không bao gồm
          </h4>
          <ul class="space-y-2">
            ${excludedHtml}
          </ul>
        </div>
      </div>

      <!-- Price & CTA Box -->
      <div class="bg-gradient-to-r from-slate-900 to-cyan-950 p-6 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xl">
        <div>
          <span class="text-xs text-cyan-200 uppercase tracking-widest block font-medium">Giá tour trọn gói dự kiến</span>
          <div class="text-3xl font-extrabold text-white mt-1">${tour.price}</div>
          <span class="text-xs text-slate-300 block mt-0.5">${tour.priceNote}</span>
        </div>
        <button 
          onclick="closeTourModal(); selectTourAndScroll('${tour.name}')"
          class="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg transition-all transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center justify-center gap-2"
        >
          <i class="fa-solid fa-paper-plane"></i> Đăng ký tư vấn tour này
        </button>
      </div>
    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeTourModal() {
  const modal = document.getElementById("tourDetailModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// 6. POPULATE TOUR DROPDOWN IN BLOCK 4
function populateDestinationDropdown() {
  const select = document.getElementById("tourDestination");
  if (!select) return;

  // Clear existing except placeholder
  select.innerHTML = '<option value="">-- Chọn tour hoặc điểm đến mong muốn --</option>';

  // Group by region
  const regions = [
    { key: "north", label: "Miền Bắc" },
    { key: "central", label: "Miền Trung" },
    { key: "south", label: "Miền Nam" },
    { key: "highland", label: "Cao nguyên" }
  ];

  regions.forEach(reg => {
    const group = document.createElement("optgroup");
    group.label = `--- ${reg.label} ---`;
    const tours = TOURS_DATA.filter(t => t.region === reg.key);
    tours.forEach(tour => {
      const opt = document.createElement("option");
      opt.value = tour.name;
      opt.textContent = `${tour.name} (${tour.duration})`;
      group.appendChild(opt);
    });
    select.appendChild(group);
  });

  // Custom option
  const customOpt = document.createElement("option");
  customOpt.value = "Tour thiết kế riêng theo yêu cầu";
  customOpt.textContent = "⭐ Tour thiết kế riêng theo yêu cầu (Gia đình/Đoàn thể)";
  select.appendChild(customOpt);
}

// 7. SELECT TOUR & SMOOTH SCROLL TO FORM
function selectTourAndScroll(tourName) {
  const select = document.getElementById("tourDestination");
  const formSection = document.getElementById("tuvan");

  if (select && tourName) {
    select.value = tourName;
  }

  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
    const formBox = document.getElementById("consultationForm");
    if (formBox) {
      formBox.classList.add("ring-4", "ring-cyan-500", "ring-offset-2");
      setTimeout(() => {
        formBox.classList.remove("ring-4", "ring-cyan-500", "ring-offset-2");
      }, 2500);
    }
  }
}

// 8. ACCURATE REAL COUNTDOWN TIMER (Urgency Marketing)
function setupCountdown() {
  // Target date: set to 7 days from now and store in localStorage to avoid resetting on refresh
  const STORAGE_KEY = "tuatravel_promotion_end_time";
  let targetTime = localStorage.getItem(STORAGE_KEY);

  if (!targetTime || isNaN(parseInt(targetTime)) || parseInt(targetTime) <= Date.now()) {
    // 7 days from current moment
    const sevenDaysLater = Date.now() + (7 * 24 * 60 * 60 * 1000) + (14 * 60 * 60 * 1000) + (35 * 60 * 1000);
    localStorage.setItem(STORAGE_KEY, sevenDaysLater.toString());
    targetTime = sevenDaysLater;
  } else {
    targetTime = parseInt(targetTime);
  }

  const daysEl = document.getElementById("timerDays");
  const hoursEl = document.getElementById("timerHours");
  const minsEl = document.getElementById("timerMinutes");
  const secsEl = document.getElementById("timerSeconds");

  function update() {
    const now = Date.now();
    let diff = targetTime - now;

    if (diff <= 0) {
      // Promotion concluded or extended
      diff = 0;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    if (daysEl) daysEl.textContent = String(days).padStart(2, "0");
    if (hoursEl) hoursEl.textContent = String(hours).padStart(2, "0");
    if (minsEl) minsEl.textContent = String(minutes).padStart(2, "0");
    if (secsEl) secsEl.textContent = String(seconds).padStart(2, "0");
  }

  update();
  setInterval(update, 1000);
}

// 9. FORM VALIDATION & CONFIRMATION
function setupFormValidation() {
  const form = document.getElementById("consultationForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Elements
    const nameInput = document.getElementById("customerName");
    const phoneInput = document.getElementById("customerPhone");
    const emailInput = document.getElementById("customerEmail");
    const destinationInput = document.getElementById("tourDestination");
    const guestsInput = document.getElementById("tourGuests");
    const dateInput = document.getElementById("tourDate");
    const notesInput = document.getElementById("tourNotes");

    let isValid = true;

    // Helper error display
    function setError(input, message) {
      const parent = input.parentElement;
      let error = parent.querySelector(".error-msg");
      if (!error) {
        error = document.createElement("p");
        error.className = "error-msg text-xs text-rose-500 mt-1 font-medium";
        parent.appendChild(error);
      }
      error.textContent = message;
      input.classList.add("border-rose-500");
    }

    function clearError(input) {
      const parent = input.parentElement;
      const error = parent.querySelector(".error-msg");
      if (error) error.remove();
      input.classList.remove("border-rose-500");
    }

    // Name validation
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      setError(nameInput, "Vui lòng nhập họ và tên hợp lệ (tối thiểu 2 ký tự).");
      isValid = false;
    } else {
      clearError(nameInput);
    }

    // Phone validation (Vietnamese mobile: 10 digits starting with 03, 05, 07, 08, 09)
    const phoneRegex = /^(03|05|07|08|09)\d{8}$/;
    const cleanPhone = phoneInput.value.replace(/\s+/g, "");
    if (!phoneRegex.test(cleanPhone)) {
      setError(phoneInput, "Số điện thoại không hợp lệ (gồm 10 chữ số, VD: 0988123456).");
      isValid = false;
    } else {
      clearError(phoneInput);
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      setError(emailInput, "Vui lòng nhập địa chỉ email hợp lệ.");
      isValid = false;
    } else {
      clearError(emailInput);
    }

    // Destination
    if (!destinationInput.value) {
      setError(destinationInput, "Vui lòng chọn điểm đến hoặc tour bạn mong muốn.");
      isValid = false;
    } else {
      clearError(destinationInput);
    }

    if (!isValid) return;

    // Prepare confirmation data
    const submissionData = {
      fullName: nameInput.value.trim(),
      phone: cleanPhone,
      email: emailInput.value.trim(),
      tour: destinationInput.value,
      guests: guestsInput.value || "Chưa xác định",
      departureDate: dateInput.value || "Linh hoạt",
      notes: notesInput.value.trim() || "Không có yêu cầu đặc biệt",
      code: "TUA-" + Math.floor(100000 + Math.random() * 900000),
      createdAt: new Date().toLocaleString("vi-VN")
    };

    // Show Confirmation Modal
    showSuccessReceiptModal(submissionData);

    // Reset Form
    form.reset();
  });
}

// 10. SUCCESS CONFIRMATION MODAL
function showSuccessReceiptModal(data) {
  const modal = document.getElementById("successModal");
  const modalBody = document.getElementById("successModalBody");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <div class="text-center mb-6">
      <div class="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-3 text-2xl shadow-inner">
        <i class="fa-solid fa-check"></i>
      </div>
      <h3 class="text-2xl font-bold text-slate-800 font-heading">Đã tiếp nhận yêu cầu tư vấn!</h3>
      <p class="text-sm text-slate-600 mt-1">
        Cảm ơn <span class="font-bold text-cyan-800">${data.fullName}</span> đã gửi thông tin chuyến đi cho TUATRAVEL.
      </p>
    </div>

    <!-- Receipt Details Box -->
    <div class="bg-slate-50 p-5 rounded-2xl border border-slate-200 text-sm space-y-2.5 mb-5">
      <div class="flex justify-between items-center pb-2 border-b border-slate-200">
        <span class="text-slate-500 font-medium">Mã yêu cầu:</span>
        <span class="font-mono font-bold text-cyan-700 bg-cyan-100/60 px-2.5 py-0.5 rounded">${data.code}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-500">Số điện thoại:</span>
        <span class="font-semibold text-slate-800">${data.phone}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-500">Email:</span>
        <span class="font-semibold text-slate-800">${data.email}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-500">Tour đăng ký:</span>
        <span class="font-semibold text-cyan-800 text-right">${data.tour}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-500">Số khách:</span>
        <span class="font-semibold text-slate-800">${data.guests}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-slate-500">Khởi hành dự kiến:</span>
        <span class="font-semibold text-slate-800">${data.departureDate}</span>
      </div>
    </div>

    <!-- Administrative Note as strictly requested -->
    <div class="p-4 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 leading-relaxed mb-6">
      <div class="flex items-center gap-1.5 font-bold mb-1">
        <i class="fa-solid fa-circle-exclamation text-amber-600"></i>
        <span>Cam kết phục vụ & Lưu ý hệ thống:</span>
      </div>
      <p>• Chuyên viên tư vấn TUATRAVEL sẽ liên hệ qua điện thoại/Zalo trong vòng <strong>15 - 30 phút</strong> để báo giá chính xác và gửi lịch trình chi tiết.</p>
      <p class="mt-1 text-[11px] text-amber-700/90 italic">
        (Hệ thống đang hoạt động ở chế độ Demo/Placeholder. Thông tin đã được ghi nhận trên giao diện. Để gửi trực tiếp vào CRM/Email/Google Sheets của công ty, chỉ cần tích hợp Webhook API theo tài liệu triển khai.)
      </p>
    </div>

    <button 
      onclick="closeSuccessModal()"
      class="w-full py-3 bg-cyan-700 hover:bg-cyan-800 text-white font-bold rounded-xl shadow transition-colors cursor-pointer"
    >
      Đã hiểu và Đóng
    </button>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closeSuccessModal() {
  const modal = document.getElementById("successModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

// 11. FAQ ACCORDION HANDLER
function setupAccordion() {
  const accordionButtons = document.querySelectorAll(".faq-trigger");
  accordionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const content = btn.nextElementSibling;
      const icon = btn.querySelector(".faq-icon");
      const isExpanded = btn.getAttribute("aria-expanded") === "true";

      // Close all other items
      accordionButtons.forEach(otherBtn => {
        if (otherBtn !== btn) {
          otherBtn.setAttribute("aria-expanded", "false");
          otherBtn.nextElementSibling.classList.add("hidden");
          const otherIcon = otherBtn.querySelector(".faq-icon");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        }
      });

      // Toggle current
      if (isExpanded) {
        btn.setAttribute("aria-expanded", "false");
        content.classList.add("hidden");
        if (icon) icon.style.transform = "rotate(0deg)";
      } else {
        btn.setAttribute("aria-expanded", "true");
        content.classList.remove("hidden");
        if (icon) icon.style.transform = "rotate(180deg)";
      }
    });
  });
}

// 12. SCROLL EFFECTS & NAVBAR
function setupScrollEffects() {
  const nav = document.getElementById("mainNavbar");
  const backToTopBtn = document.getElementById("backToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
      nav?.classList.add("scrolled", "py-2.5");
      nav?.classList.remove("py-4");
      backToTopBtn?.classList.remove("opacity-0", "pointer-events-none");
      backToTopBtn?.classList.add("opacity-100");
    } else {
      nav?.classList.remove("scrolled", "py-2.5");
      nav?.classList.add("py-4");
      backToTopBtn?.classList.add("opacity-0", "pointer-events-none");
      backToTopBtn?.classList.remove("opacity-100");
    }
  });

  // Mobile menu toggle
  const mobileToggle = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  mobileToggle?.addEventListener("click", () => {
    mobileMenu?.classList.toggle("hidden");
  });

  // Close mobile menu when link clicked
  const mobileLinks = mobileMenu?.querySelectorAll("a");
  mobileLinks?.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// 13. POLICY MODAL
function openPolicyModal(policyType) {
  const modal = document.getElementById("policyModal");
  const titleEl = document.getElementById("policyModalTitle");
  const contentEl = document.getElementById("policyModalContent");
  if (!modal || !titleEl || !contentEl) return;

  const policies = {
    booking: {
      title: "Chính sách đặt tour & giữ chỗ",
      content: `
        <h4 class="font-bold text-cyan-900 mb-2">1. Quy trình đăng ký và xác nhận</h4>
        <p class="text-sm text-slate-600 mb-3">Khách hàng có thể đăng ký tour qua website TUATRAVEL, hotline 1900 1234, hoặc nhắn tin qua kênh Facebook/Zalo chính thức. Sau khi tiếp nhận thông tin, tư vấn viên sẽ gửi phiếu xác nhận dịch vụ kèm mã số đặt chỗ.</p>
        <h4 class="font-bold text-cyan-900 mb-2">2. Đặt cọc giữ chỗ</h4>
        <p class="text-sm text-slate-600 mb-3">• Khách hàng đặt cọc 50% tổng giá trị tour ngay khi ký hợp đồng hoặc xác nhận phiếu đăng ký.<br>• Số tiền còn lại 50% sẽ thanh toán trước ngày khởi hành từ 3-5 ngày (đối với tour ngày thường) hoặc 7-10 ngày (đối với tour Lễ, Tết).</p>
      `
    },
    payment: {
      title: "Chính sách thanh toán an toàn",
      content: `
        <h4 class="font-bold text-cyan-900 mb-2">1. Phương thức thanh toán</h4>
        <p class="text-sm text-slate-600 mb-3">• Chuyển khoản ngân hàng chính thức của công ty.<br>• Thanh toán tiền mặt trực tiếp tại văn phòng TUATRAVEL (123 Võ Thị Sáu, Biên Hòa, Đồng Nai).<br>• Cổng thanh toán trực tuyến (VNPAY, Momo, Thẻ tín dụng/Ghi nợ Visa, Master).</p>
        <h4 class="font-bold text-cyan-900 mb-2">2. Hóa đơn tài chính</h4>
        <p class="text-sm text-slate-600 mb-3">TUATRAVEL xuất hóa đơn điện tử VAT (thuế suất theo quy định hiện hành) cho khách hàng và doanh nghiệp trong vòng 48 giờ sau khi hoàn tất dịch vụ.</p>
      `
    },
    refund: {
      title: "Chính sách hủy & hoàn tour",
      content: `
        <h4 class="font-bold text-cyan-900 mb-2">1. Hủy tour từ phía khách hàng</h4>
        <p class="text-sm text-slate-600 mb-2">• Hủy trước 15 ngày so với ngày khởi hành: Miễn phí hủy tour (hoàn 100% tiền cọc, trừ phí vé máy bay/tàu nếu đã xuất).<br>• Hủy từ 7 - 14 ngày trước ngày khởi hành: Phí hủy 30% giá tour.<br>• Hủy từ 3 - 6 ngày trước ngày khởi hành: Phí hủy 50% giá tour.<br>• Hủy trong vòng 48h trước giờ khởi hành: Phí hủy 100% giá tour.</p>
        <h4 class="font-bold text-cyan-900 mb-2">2. Trường hợp bất khả kháng</h4>
        <p class="text-sm text-slate-600">Trong trường hợp thiên tai, bão lũ hoặc dịch bệnh bất khả kháng, TUATRAVEL cam kết bảo lưu hoặc hoàn tiền dịch vụ theo chính sách của các hãng hàng không và khách sạn đối tác mà không thu thêm phí phụ.</p>
      `
    },
    privacy: {
      title: "Chính sách bảo mật thông tin",
      content: `
        <p class="text-sm text-slate-600 mb-3">TUATRAVEL cam kết bảo vệ tuyệt đối thông tin cá nhân của khách hàng (họ tên, số điện thoại, email, địa chỉ, hình ảnh căn cước công dân khi làm thủ tục bay/bảo hiểm). Chúng tôi cam đoan không chia sẻ dữ liệu cho bên thứ ba vì bất kỳ mục đích thương mại nào ngoài việc đăng ký tour du lịch và bảo hiểm bắt buộc theo luật du lịch Việt Nam.</p>
      `
    }
  };

  const selected = policies[policyType] || policies.booking;
  titleEl.textContent = selected.title;
  contentEl.innerHTML = selected.content;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
}

function closePolicyModal() {
  const modal = document.getElementById("policyModal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
  document.body.style.overflow = "auto";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setupModals() {
  // Close modals on clicking outside content
  window.addEventListener("click", (e) => {
    const tourModal = document.getElementById("tourDetailModal");
    const successModal = document.getElementById("successModal");
    const policyModal = document.getElementById("policyModal");

    if (e.target === tourModal) closeTourModal();
    if (e.target === successModal) closeSuccessModal();
    if (e.target === policyModal) closePolicyModal();
  });
}
