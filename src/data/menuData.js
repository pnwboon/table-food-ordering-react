export const categories = [
  'เนื้อสัตว์',
  'ลูกชิ้นและอาหารแปรรูป',
  'อาหารทะเล',
  'ผัก',
  'อื่นๆ',
  'ของหวาน',
];

export const menuData = [
  // --- เนื้อสัตว์ ---
  {
    id: 'm1',
    name: 'เนื้อออสเตรเลีย',
    englishName: 'Australian Beef',
    price: 189, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1721094231595-1f6451cf1f0f?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'เนื้อสัตว์',
    description: 'เนื้อวัวพรีเมียมจากออสเตรเลีย นุ่มละมุนลิ้น',
  },
  {
    id: 'm2',
    name: 'เนื้อสไลด์',
    englishName: 'Sliced Beef',
    price: 129, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1708388464276-a96b2109da73?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'เนื้อสัตว์',
    description: 'เนื้อวัวคุณภาพดี สไลด์บางพร้อมทาน',
  },
  {
    id: 'm3',
    name: 'สันคอหมูสไลด์',
    englishName: 'Sliced Pork Collar',
    price: 99, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1662541352089-c1766ffdb120?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'เนื้อสัตว์',
    description: 'สันคอหมูส่วนที่นุ่มและมีมันแทรกพอดี สไลด์พร้อมลงหม้อ',
  },
  {
    id: 'm4',
    name: 'สันนอกหมูสไลด์',
    englishName: 'Sliced Pork Loin',
    price: 89, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1609518317991-10acee259279?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'เนื้อสัตว์',
    description: 'สันนอกหมูเนื้อแน่น สไลด์บางเพื่อความอร่อย',
  },
  {
    id: 'm5',
    name: 'สามชั้นหมูสไลด์',
    englishName: 'Sliced Pork Belly',
    price: 99, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1623047437095-27418540c288?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'เนื้อสัตว์',
    description: 'สามชั้นหมูเนื้อนุ่มสลับชั้นมัน สไลด์บางพอดีคำ',
  },
  {
    id: 'm6',
    name: 'อกไก่สไลด์',
    englishName: 'Sliced Chicken Breast',
    price: 79, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1682991136736-a2b44623eeba?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'เนื้อสัตว์',
    description: 'อกไก่นุ่มๆ สไลด์บาง ทานง่ายสำหรับคนรักสุขภาพ',
  },
  {
    id: 'm7',
    name: 'ไก่ลาวา',
    englishName: 'Lava Chicken',
    price: 85, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'เนื้อสัตว์',
    description: 'เนื้อไก่หมักซอสสูตรพิเศษ รสชาติเข้มข้น',
  },
  {
    id: 'm8',
    name: 'หมูไม้ไผ่',
    englishName: 'Bamboo Pork',
    price: 90, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'เนื้อสัตว์',
    description: 'หมูบดทรงเครื่อง ปั้นเป็นก้อนเสียบไม้ไผ่ พร้อมปรุง',
  },
  {
    id: 'm9',
    name: 'หมูลาวา',
    englishName: 'Lava Pork',
    price: 85, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'เนื้อสัตว์',
    description: 'หมูบดปรุงรสเข้มข้น เนื้อสัมผัสเนียนนุ่ม',
  },
  {
    id: 'm10',
    name: 'ตับหมู',
    englishName: 'Pork Liver',
    price: 65, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Pig%27s_liver_with_sauteed_onion.jpg',
    category: 'เนื้อสัตว์',
    description: 'ตับหมูสดใหม่ หั่นชิ้นพอดีคำ',
  },

  // --- ลูกชิ้นและอาหารแปรรูป ---
  {
    id: 'm11',
    name: 'ปลาเส้น',
    englishName: 'Fish Stick',
    price: 55, // ราคาปรับแล้ว
    image: 'https://plus.unsplash.com/premium_photo-1712932551700-b68e8912bf5c?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'ปลาเส้นเนื้อนุ่ม เคี้ยวเพลิน',
  },
  {
    id: 'm12',
    name: 'ปูอัด',
    englishName: 'Crab Stick',
    price: 60, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c7/Kanikama.jpg',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'ปูอัดคุณภาพดี รสชาติกลมกล่อม',
  },
  {
    id: 'm13',
    name: 'ลูกชิ้นปลา',
    englishName: 'Fish Ball',
    price: 55, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Fish_ball_and_fish_meat_slice.jpg/1280px-Fish_ball_and_fish_meat_slice.jpg',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'ลูกชิ้นปลาเนื้อเด้ง ปรุงสุกง่าย',
  },
  {
    id: 'm14',
    name: 'หมูห่อสาหร่าย',
    englishName: 'Pork Wrapped in Seaweed',
    price: 70, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'หมูบดปรุงรสห่อด้วยสาหร่ายอย่างดี',
  },
  {
    id: 'm15',
    name: 'เต้าหู้ปลา',
    englishName: 'Fish Tofu',
    price: 60, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'เต้าหู้ปลาเนื้อนุ่ม รสชาติอร่อย',
  },
  {
    id: 'm16',
    name: 'เต้าหู้ชีส',
    englishName: 'Cheese Tofu',
    price: 75, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'เต้าหู้เนื้อนุ่มสอดไส้ชีสเยิ้มๆ',
  },
  {
    id: 'm17',
    name: 'ปลาม้วนไส้ไข่เค็ม',
    englishName: 'Fish Roll with Salted Egg Yolk',
    price: 75, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'ปลาม้วนเนื้อนุ่ม สอดไส้ไข่เค็มรสชาติเข้มข้น',
  },
  {
    id: 'm18',
    name: 'เกี๊ยวซ่าไก่',
    englishName: 'Chicken Gyoza',
    price: 65, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1588182728399-e8f2df121744?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'เกี๊ยวซ่าไส้ไก่เนื้อแน่น แป้งบางนุ่ม',
  },
  {
    id: 'm19',
    name: 'ปูอัดชีส',
    englishName: 'Cheese Crab Stick',
    price: 70, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1688818227320-ad3f21537fa9?q=80&w=918&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'ปูอัดสอดไส้ชีสยืดๆ ฟินทุกคำ',
  },
  {
    id: 'm20',
    name: 'เต้าหู้ไข่',
    englishName: 'Egg Tofu',
    price: 45, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'เต้าหู้ไข่เนื้อเนียนนุ่ม ทานง่าย',
  },
  {
    id: 'm21',
    name: 'เกี๊ยวผักโขมชีส',
    englishName: 'Spinach and Cheese Dumpling',
    price: 75, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1738681336104-608b4e7dc3b0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'เกี๊ยวแป้งบาง ไส้ผักโขมและชีส หอมอร่อย',
  },
  {
    id: 'm22',
    name: 'ฟองเต้าหู้ปลาม้วน',
    englishName: 'Fish Rolled Tofu Skin',
    price: 60, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'ฟองเต้าหู้ห่อปลาม้วน รสสัมผัสละมุน',
  },
  {
    id: 'm23',
    name: 'เกี๊ยวหมูห่อชีส',
    englishName: 'Pork Wrapped Cheese Dumpling',
    price: 80, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1703080173985-936514c7c8bd?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'เกี๊ยวหมูสอดไส้ชีสเน้นๆ อร่อยเต็มคำ',
  },
  {
    id: 'm24',
    name: 'คริสตัลชีสทรัฟเฟิล',
    englishName: 'Crystal Cheese Truffle',
    price: 85, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'ลูกชิ้นและอาหารแปรรูป',
    description: 'อาหารแปรรูปทรงคริสตัลสอดไส้ชีสและเห็ดทรัฟเฟิล',
  },

  // --- อาหารทะเล ---
  {
    id: 'm25',
    name: 'กุ้ง',
    englishName: 'Shrimp',
    price: 159, // ราคาปรับแล้ว
    image: 'https://plus.unsplash.com/premium_photo-1674498271021-9d41ffe0f9ad?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'อาหารทะเล',
    description: 'กุ้งสด เนื้อแน่น หวานธรรมชาติ',
  },
  {
    id: 'm26',
    name: 'ปลาหมึกสด',
    englishName: 'Fresh Squid',
    price: 139, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1623910270365-9b45727235c4?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'อาหารทะเล',
    description: 'ปลาหมึกสดๆ เนื้อกรอบอร่อย',
  },
  {
    id: 'm27',
    name: 'ปลาหมึกกรอบ',
    englishName: 'Crispy Squid',
    price: 119, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'อาหารทะเล',
    description: 'ปลาหมึกกรอบชิ้นใหญ่ เคี้ยวหนึบหนับ',
  },
  {
    id: 'm28',
    name: 'หอยแมลงภู่',
    englishName: 'Mussel',
    price: 99, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1602065538249-7f958ef7b356?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'อาหารทะเล',
    description: 'หอยแมลงภู่สด สะอาด ตัวอวบ',
  },
  {
    id: 'm29',
    name: 'แมงกะพรุน',
    englishName: 'Jellyfish',
    price: 89, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Jellyfish_sesame_oil_and_chili_sauce.jpg/250px-Jellyfish_sesame_oil_and_chili_sauce.jpg',
    category: 'อาหารทะเล',
    description: 'แมงกะพรุนกรุบกรอบ ทานกับน้ำจิ้มอร่อย',
  },
  {
    id: 'm30',
    name: 'ปลาดอลลี่',
    englishName: 'Dolly Fish',
    price: 95, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'อาหารทะเล',
    description: 'ปลาดอลลี่เนื้อขาวนุ่ม ไม่มีก้าง',
  },

  // --- ผัก ---
  {
    id: 'm31',
    name: 'ผักรวม',
    englishName: 'Mixed Vegetables',
    price: 89, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1588505617603-f80b72bf8f24?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ผัก',
    description: 'ผักสดนานาชนิด ครบคุณค่าทางโภชนาการ',
  },
  {
    id: 'm32',
    name: 'ผักกาดขาว',
    englishName: 'Napa Cabbage',
    price: 45, // ราคาปรับแล้ว
    image: 'https://plus.unsplash.com/premium_photo-1700028099716-f9915f53624e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ผัก',
    description: 'ผักกาดขาวสด กรอบ หวานธรรมชาติ',
  },
  {
    id: 'm33',
    name: 'ข้าวโพดอ่อน',
    englishName: 'Baby Corn',
    price: 50, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a1/Baby_corn.jpg',
    category: 'ผัก',
    description: 'ข้าวโพดอ่อนกรอบๆ หวานน้อย',
  },
  {
    id: 'm34',
    name: 'แครอท',
    englishName: 'Carrot',
    price: 45, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1601493700750-58796129ebb5?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ผัก',
    description: 'แครอทหั่นชิ้น พอดีคำ',
  },
  {
    id: 'm35',
    name: 'เห็ดเข็มทอง',
    englishName: 'Enoki Mushroom',
    price: 60, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Enoki_mushroom.jpg/800px-Enoki_mushroom.jpg',
    category: 'ผัก',
    description: 'เห็ดเข็มทองกรุบๆ อร่อยได้ทุกเมนู',
  },
  {
    id: 'm36',
    name: 'เห็ดชิเมจิ',
    englishName: 'Shimeji Mushroom',
    price: 60, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Lyophyllum_shimeji.jpg',
    category: 'ผัก',
    description: 'เห็ดชิเมจิเนื้อนุ่ม กลิ่นหอมเฉพาะตัว',
  },
  {
    id: 'm37',
    name: 'เห็ดออรินจิ',
    englishName: 'Eryngii Mushroom',
    price: 70, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Seta_de_cardo_%28Pleurotus_eryngii%29%2C_2012-10-03%2C_DD_01.JPG/1641px-Seta_de_cardo_%28Pleurotus_eryngii%29%2C_2012-10-03%2C_DD_01.JPG',
    category: 'ผัก',
    description: 'เห็ดออรินจิเนื้อหนึบหนับ เคี้ยวสนุก',
  },
  {
    id: 'm38',
    name: 'สาหร่ายวากาเมะ',
    englishName: 'Wakame Seaweed',
    price: 55, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Boiled_wakame.jpg/1280px-Boiled_wakame.jpg',
    category: 'ผัก',
    description: 'สาหร่ายวากาเมะแช่น้ำพร้อมทาน เหนียวนุ่ม',
  },
  {
    id: 'm39',
    name: 'ผักกวางตุ้งไต้หวัน',
    englishName: 'Taiwanese Bok Choy',
    price: 50, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Bok_Choy_%2849553125456%29.jpg/800px-Bok_Choy_%2849553125456%29.jpg',
    category: 'ผัก',
    description: 'ผักกวางตุ้งไต้หวันต้นอ่อน หวานกรอบ',
  },
  {
    id: 'm40',
    name: 'กะหล่ำปลี',
    englishName: 'Cabbage',
    price: 45, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1611105637889-3afd7295bdbf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ผัก',
    description: 'กะหล่ำปลีหั่นพอดีคำ หวานอร่อยเมื่อต้ม',
  },
  {
    id: 'm41',
    name: 'ข้าวโพดหวาน',
    englishName: 'Sweet Corn',
    price: 50, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1629570585008-27e194a5d0f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ผัก',
    description: 'ข้าวโพดหวานฝานเม็ดสดๆ',
  },
  {
    id: 'm42',
    name: 'ผักบุ้งจีน',
    englishName: 'Morning Glory',
    price: 45, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ipomoea_aquatica_cooked.jpg/250px-Ipomoea_aquatica_cooked.jpg',
    category: 'ผัก',
    description: 'ผักบุ้งจีนสดๆ ยอดอ่อนน่ารับประทาน',
  },

  // --- อื่นๆ ---
  {
    id: 'm43',
    name: 'บะหมี่หยก',
    englishName: 'Jade Noodle',
    price: 35, // ราคาปรับแล้ว
    image: 'https://placehold.co/150x150',
    category: 'อื่นๆ',
    description: 'บะหมี่หยกเส้นเหนียวนุ่ม สีเขียวสวยงาม',
  },
  {
    id: 'm44',
    name: 'มาม่า',
    englishName: 'Instant Noodles',
    price: 30, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Mama_instant_noodle_block.jpg/1024px-Mama_instant_noodle_block.jpg',
    category: 'อื่นๆ',
    description: 'บะหมี่กึ่งสำเร็จรูปยอดนิยม อิ่มอร่อยง่ายๆ',
  },
  {
    id: 'm45',
    name: 'ไข่ไก่',
    englishName: 'Chicken Egg',
    price: 15, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1691480158362-d958b907dc35?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'อื่นๆ',
    description: 'ไข่ไก่สด โปรตีนสูง',
  },
  {
    id: 'm46',
    name: 'วุ้นเส้น',
    englishName: 'Glass Noodles',
    price: 35, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Cooked_dangmyeon.jpg',
    category: 'อื่นๆ',
    description: 'วุ้นเส้นเหนียวนุ่ม ไม่เละง่าย',
  },
  {
    id: 'm47',
    name: 'ชีส',
    englishName: 'Cheese',
    price: 40, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Mozzarella_di_bufala3.jpg/1280px-Mozzarella_di_bufala3.jpg',
    category: 'อื่นๆ',
    description: 'ชีสแผ่นสำหรับเพิ่มความเข้มข้น',
  },
  {
    id: 'm48',
    name: 'ข้าวสวย',
    englishName: 'Steamed Rice',
    price: 20, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1644131447497-8723db691320?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'อื่นๆ',
    description: 'ข้าวสวยหอมมะลิ ร้อนๆ พร้อมเสิร์ฟ',
  },

  // --- ของหวาน ---
  {
    id: 'm49',
    name: 'ไอศกรีมช็อกโกแลต',
    englishName: 'Chocolate Ice Cream',
    price: 65, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ของหวาน',
    description: 'ไอศกรีมช็อกโกแลตเข้มข้น หวานมันชื่นใจ',
  },
  {
    id: 'm50',
    name: 'ไอศกรีมรวมมิตร',
    englishName: 'Mixed Ice Cream',
    price: 70, // ราคาปรับแล้ว
    image: 'https://plus.unsplash.com/premium_photo-1733306657240-a398488ea835?q=80&w=560&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ของหวาน',
    description: 'ไอศกรีมหลากหลายรสชาติในถ้วยเดียว',
  },
  {
    id: 'm51',
    name: 'ไอศกรีมบ๊วย',
    englishName: 'Plum Ice Cream',
    price: 60, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1650419741906-1cdead9c9b4f?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ของหวาน',
    description: 'ไอศกรีมรสบ๊วย เปรี้ยวอมหวาน ชื่นใจ',
  },
  {
    id: 'm52',
    name: 'มะม่วงซอร์เบท',
    englishName: 'Mango Sorbet',
    price: 75, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1644204010805-90a62ab0bdc9?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ของหวาน',
    description: 'มะม่วงซอร์เบทเนื้อเนียน รสชาติมะม่วงแท้ๆ',
  },
  {
    id: 'm53',
    name: 'ไอศกรีมอันนี่มิลค์',
    englishName: 'Anny Milk Ice Cream',
    price: 65, // ราคาปรับแล้ว
    image: 'https://images.unsplash.com/photo-1688841914419-482222767a22?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'ของหวาน',
    description: 'ไอศกรีมนมสด รสชาติกลมกล่อม หวานมัน',
  },
  {
    id: 'm54',
    name: 'วุ้นลูกตาลน้ำสด',
    englishName: 'Palm Seed Jelly with Fresh Water',
    price: 50, // ราคาปรับแล้ว
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Borassus_flabellifer%2C_doub_palm%2C_palmyra_palm%2C_tala_palm%2C_toddy_palm%2C_wine_palm%2C_%E0%B4%95%E0%B4%B0%E0%B4%BF%E0%B4%82%E0%B4%AE%E0%B5%8D%E0%B4%AA%E0%B4%A8.jpg/250px-Borassus_flabellifer%2C_doub_palm%2C_palmyra_palm%2C_tala_palm%2C_toddy_palm%2C_wine_palm%2C_%E0%B4%95%E0%B4%B0%E0%B4%BF%E0%B4%82%E0%B4%AE%E0%B5%8D%E0%B4%AA%E0%B4%A8.jpg',
    category: 'ของหวาน',
    description: 'วุ้นลูกตาลน้ำสด หวานเย็นชื่นใจ',
  },
];