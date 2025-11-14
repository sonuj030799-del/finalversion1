import type { Product } from "@shared/api";

export const CATEGORIES = [
  { key: "Promotional Gifts", label: "Promotional Gifts" },
  { key: "Corporate Gifts", label: "Corporate Gifts" },
  { key: "Festival Gifts", label: "Festival Gifts" },
  { key: "Occasional Gifts", label: "Occasional Gifts" },
  { key: "Charity Gifts", label: "Charity Gifts" },
] as const;

export const products: Product[] = [
  // === PROMOTIONAL ITEMS (used by PromotionalGifts page) START ===
  // These product objects were added specifically for the Promotional Gifts page
  // and are grouped here so you can find them easily.
  // Each object below includes `subCategory` which the strip filters on.

  // PROMO - subCategory: everyday
  {
    id: "Personalized Can Glass Tumbler - COD Not Applicable",
    name: "Personalized Can Glass Tumbler - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762592272/Gemini_Generated_Image_37f8ky37f8ky37f8_dmidym.png",
    ],
    price: 690,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "everyday",
    description:
      "A compact everyday utility promotional set — bottle, snack, and greeting card.",
  },
  // PROMO - subCategory: everyday
  {
    id: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    name: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695371/DSC03466-min_1800x1800_wc1f0v.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695372/DSC03454-min_1200x_coidml.webp",
    ],
    price: 545,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    name: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697173/Gemini_Generated_Image_g8x9edg8x9edg8x9_qaqddu.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697148/IMG_4775-min_800x_mfttwl.webp",
    ],
    price: 799,
    originalPrice: 850,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED HAMPER - SELF-CARE GIRLIE - COD NOT APPLICABLE",
    name: "PERSONALIZED HAMPER - SELF-CARE GIRLIE - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699273/Gemini_Generated_Image_wtri9awtri9awtri_zuei4x.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699273/Gemini_Generated_Image_wtri9awtri9awtri_zuei4x.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699269/JewelleryBox_7_e3630604-01ea-4c87-88bb-ba07a2c445ec_800x_mnwddj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762699276/Gemini_Generated_Image_qm3glhqm3glhqm3g_ewunzf.png",
    ],
    price: 1900,
    originalPrice: 2150,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED CAN GLASS TUMBLER - SNOWFLAKE - COD NOT APPLICABLE",
    name: "PERSONALIZED CAN GLASS TUMBLER - SNOWFLAKE - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700941/Gemini_Generated_Image_hzesc5hzesc5hzes_plolwf.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700941/Gemini_Generated_Image_hzesc5hzesc5hzes_plolwf.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762700942/Gemini_Generated_Image_ra3ovbra3ovbra3o_jmqv0m.png",
    ],
    price: 845,
    originalPrice: 900,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    name: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702511/Gemini_Generated_Image_d48p4ed48p4ed48p_yjkyra.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702510/Gemini_Generated_Image_9cbzyk9cbzyk9cbz_f0rlhe.png",
    ],
    price: 525,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "PERSONALIZED HAMPER - REGAL - COD NOT APPLICABLE",
    name: "PERSONALIZED HAMPER - REGAL - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_exe23rexe23rexe2_alpsvk.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_exe23rexe23rexe2_alpsvk.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762704618/Gemini_Generated_Image_pv463ipv463ipv46_cdslwy.png",
    ],
    price: 1699,
    originalPrice: 1850,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Money Plant In Stylish Terracotta Pot",
    name: "Money Plant In Stylish Terracotta Pot",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705128/DSC_2761_pt1wzk.avif",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705128/DSC_2761_pt1wzk.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705157/DSC_2762_kncklz.avif",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762705158/DSC_2763_h45vmf.avif",
    ],
    price: 625,
    category: "promotional-gifts",
    subCategory: "everyday",
    description: "Value everyday gift with custom branding options.",
  },

  // PROMO - subCategory: travel
  {
    id: "Exclusive Passport Cover - Wanderlust",
    name: "Exclusive Passport Cover - Wanderlust",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_awub9cawub9cawub_onhx8j.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_awub9cawub9cawub_onhx8j.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758514/Gemini_Generated_Image_8y63vp8y63vp8y63_sceydm.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758513/Gemini_Generated_Image_90fk3s90fk3s90fk_cz2ptg.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762758512/personalized-passport-cover-forest-green-the-messy-corner-passport-cover-19463612858524_0ac71628-1e57-4cc2-b3d4-025a661cbd56_1300x_z6j4kn.webp"
    ],
    price: 449,
    originalPrice: 900,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
  {
    id: "Travel Memory Box - souvenir & keepsake box customized",
    name: "Travel Memory Box - souvenir & keepsake box customized",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771590/Gemini_Generated_Image_xh6l3mxh6l3mxh6l_eigmwy.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771590/Gemini_Generated_Image_xh6l3mxh6l3mxh6l_eigmwy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762771589/Gemini_Generated_Image_2sne1x2sne1x2sne_z6drjx.png"],
    price: 990,
    originalPrice: 1399,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
   {
    id: "Customized 6-in-1 Travel Gift Set – Perfect for Business & Travel",
    name: "Customized 6-in-1 Travel Gift Set – Perfect for Business & Travel",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772027/Gemini_Generated_Image_jkpv94jkpv94jkpv_fbdsn6.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772027/Gemini_Generated_Image_jkpv94jkpv94jkpv_fbdsn6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772026/Gemini_Generated_Image_an4seoan4seoan4s_o6afgp.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772026/Gemini_Generated_Image_ig3189ig3189ig31_xbbxnq.png"],
    price: 1495,
    originalPrice: 2995,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
    {
    id: "Jet Setter Gift Tote",
    name: "Jet Setter Gift Tote",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772306/NewProject_3_1476905e-1302-4605-9884-ad9492af6d18_800x800_iwmdi7.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772306/NewProject_3_1476905e-1302-4605-9884-ad9492af6d18_800x800_iwmdi7.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772305/NewProject_4_25588915-ad3a-4329-bcae-9c30bf415726_800x800_clvbqi.webp"],
    price: 7130,
    originalPrice: 7130,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
    {
    id: "Gold Foiled Pocket Umbrella",
    name: "Gold Foiled Pocket Umbrella",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772590/DSC09506-min_1800x1800_jurumd.jpg",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772590/DSC09506-min_1800x1800_jurumd.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772589/DSC09520-min_1500x1500_l6eekt.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762772589/DSC09516-min_1800x1800_mbeslu.webp"],
    price: 800 ,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Premium travel kit for corporate gifting.",
  },
   {
    id: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    name: "PERSONALIZED CLEAR ZIPPER POUCH - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702513/Gemini_Generated_Image_aaehxgaaehxgaaeh_tampa6.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702511/Gemini_Generated_Image_d48p4ed48p4ed48p_yjkyra.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762702510/Gemini_Generated_Image_9cbzyk9cbzyk9cbz_f0rlhe.png",
    ],
    price: 525,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
   {
    id: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    name: "PERSONALIZED LARGE CERAMIC COFFEE MUG - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697174/IMG_4836-min_1800x1800_ozizua.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697173/Gemini_Generated_Image_g8x9edg8x9edg8x9_qaqddu.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762697148/IMG_4775-min_800x_mfttwl.webp",
    ],
    price: 799,
    originalPrice: 850,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Personalized Can Glass Tumbler - COD Not Applicable",
    name: "Personalized Can Glass Tumbler - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762591956/Gemini_Generated_Image_qevcdhqevcdhqevc_kh2cso.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762592272/Gemini_Generated_Image_37f8ky37f8ky37f8_dmidym.png",
    ],
    price: 690,
    originalPrice: 1000,
    category: "promotional-gifts",
    subCategory: "travel",
    description:
      "A compact everyday utility promotional set — bottle, snack, and greeting card.",
  },
  // PROMO - subCategory: everyday
  {
    id: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    name: "PERSONALIZED INSULATED MINI FLASK - COD NOT APPLICABLE",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695540/Gemini_Generated_Image_vdhu7hvdhu7hvdhu_nj5ju3.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695371/DSC03466-min_1800x1800_wc1f0v.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762695372/DSC03454-min_1200x_coidml.webp",
    ],
    price: 545,
    originalPrice: 600,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },
  {
    id: "Personalized Sleek Pocket Umbrella - COD Not Applicable",
    name: "Personalized Sleek Pocket Umbrella - COD Not Applicable",
    image:
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773075/DSC07253-min_1200x_s6ubmh.webp",
    images: [
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773075/DSC07253-min_1200x_s6ubmh.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773076/DSC07256-min_1200x_flbnyr.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762773078/DSC07258-min_1200x_stmhwo.webp",
    ],
    price: 899,
    originalPrice: 1100,
    category: "promotional-gifts",
    subCategory: "travel",
    description: "Value everyday gift with custom branding options.",
  },


  // PROMO - subCategory: lifestyle
  {
    id: "Gorgeous Bride Gift Box",
    name: "Gorgeous Bride Gift Box",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855490/Gorgeous-Bride-2-768x768_haumcj.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855490/Gorgeous-Bride-2-768x768_haumcj.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762855489/Gorgeous-Bride--768x782_btjawv.webp"
    ],
    price: 2175,
    originalPrice: 2500,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for events.",
  },
  
  {
    id: "Pretty Pink Box for Her",
    name: "Pretty Pink Box for Her",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856397/Pretty-Pink-Gift-Hamper-3_vlqpxo.webp"
    ],
    price: 2599,
    originalPrice: 2999,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },
  {
    id: "Pamper Yourself Gift Hamper",
    name: "Pamper Yourself Gift Hamper",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856972/pamper-yourself-gift-hamper-the-spring-palette-37328289169627_uye89z.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856972/pamper-yourself-gift-hamper-the-spring-palette-37328289169627_uye89z.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856971/pamper-yourself-gift-hamper-the-spring-palette-37328289661147_ne8zap.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856970/pamper-yourself-gift-hamper-the-spring-palette-37328304111835_x1ormz.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762856970/pamper-yourself-gift-hamper-the-spring-palette-37328290021595_ayfity.webp"
    ],
    price: 2249,
    originalPrice: 2999,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },
   {
    id: "Sweet Birthday Celebration Basket",
    name: "Sweet Birthday Celebration Basket",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_t1ek01t1ek01t1ek_himzxy.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_t1ek01t1ek01t1ek_himzxy.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857495/Gemini_Generated_Image_rhk2uirhk2uirhk2_ggcl3w.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857496/Gemini_Generated_Image_kahar6kahar6kaha_az8oef.png"
    ],
    price: 1575,
    originalPrice: 1800,
    category: "promotional-gifts",
    subCategory: "lifestyle",
    description: "Personal care & lifestyle gifts suitable for her.",
  },

  // PROMO - subCategory: eco
  {
    id: "Thenga Evergreen Eco-Friendly Gift Hampers",
    name: "Thenga Evergreen Eco-Friendly Gift Hampers",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857931/Evergreen3_1080x_phrevh.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857931/Evergreen3_1080x_phrevh.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857930/285_1080x_aqruoi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857929/Evergreen2_1080x_rfmhnv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762857928/284_180x_pccbcg.avif"
    ],
    price: 1499,
    originalPrice: 1799,
    category: "promotional-gifts",
    subCategory: "eco",
    description: "Jute and terracotta based eco-friendly promotional gifts.",
  },
  // PROMO - subCategory: eco
  {
  id: "Eco - Essentials",
  name: "Eco - Essentials",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858534/eco-friendly-gift_cbg5tt.webp",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858534/eco-friendly-gift_cbg5tt.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858532/corporate-eco-friendly-gifts_ztazcl.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858530/eco-friendly-gift-hamper_vfnz6q.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858529/Mug_2_y7afv3.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858528/CoconutCandle_vsffkq.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858527/multipurpose-eco-friendly-canvas-pouch_sdfzhc.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762858526/StrawP4_iby4fu.webp"
  ],
  price: 2650,
  originalPrice: 3100,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Are you looking for eco-friendly gift hampers for employees, clients, and business associates? Check out our ‘eco-essentials’ organic gift hamper that will not only cater to your brand image but also protect the environment. Transform your everyday routine with this eco-conscious, sustainable gift hamper that combines style and sustainability.

The chic multipurpose canvas pouch keeps your essentials organized, while the 250-ml eco-friendly travel cup makes every sip feel planet-friendly. With the reusable stainless steel straw set of 4 straws in its jute pouch, you can make a small but meaningful change in your daily life to conserve the planet. Plus, you will get a coconut shell candle made with soy wax that adds a touch of natural serenity to any space.

This eco-friendly gift hamper is perfect for those who want to make a positive impact on the environment while enjoying stylish and practical accessories.`,
},
{
  id: "The Eco-friendly Box",
  name: "The Eco-friendly Box",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859400/Gemini_Generated_Image_l0d3f6l0d3f6l0d3_sklqhn.png",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859400/Gemini_Generated_Image_l0d3f6l0d3f6l0d3_sklqhn.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859401/Gemini_Generated_Image_f0fdbzf0fdbzf0fd_p54vpy.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859432/41KDjRa5viL_888ec556-919e-4b8b-9ff0-8d398c77b85d_phoxrw.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859433/CorkV1_paad1w.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859435/WhatsAppImage2023-09-02at14.25.59_2_indto2.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859436/WhatsAppImage2023-09-02at14.26.00_jdnuzb.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762859439/travelpouch.03_fb1f6bef-f104-4269-bf1a-4e1b047af671_zj6g8w.webp"
  ],
  price: 3350,
  originalPrice: 3700,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Going eco-friendly can help you go a long way.’ This saying is especially true when it comes to corporate gifting. Choosing environmentally friendly gifts is not just good for the environment but also good for your brand image. If you are looking for some creative, thoughtful, and sustainable gift ideas, this Eco-friendly box would be perfect for you.

 This eco-friendly gift box contains an insulated bamboo tumbler to keep your beverages hot or cold for a long time. The cork coasters and cork diary are a great way to reuse cork and avoid generating extra waste. You will also get a cork travel pouch in this gift hamper, that can be a great replacement for plastic travel pouches. This way, you can contribute to conserving the environment without compromising on functionality. 

The plantable pens are a great way to inspire more people to plant trees, and they come in a sustainable cork pouch. Besides being sustainable, all the items in this eco-friendly box are aesthetically pleasing and make your life easy and convenient.`,
},
{
  id: "Eco-Chic Gift Box - Bamboo like notebook, pen & Bamboo bottle Gift Pack",
  name: "Eco-Chic Gift Box - Bamboo like notebook, pen & Bamboo bottle Gift Pack",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_t57d7ft57d7ft57d_xykllv.png",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_t57d7ft57d7ft57d_xykllv.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860294/Gemini_Generated_Image_sg0ovksg0ovksg0o_e8fexa.png",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860293/Gemini_Generated_Image_u708ksu708ksu708_vzrhhm.png"
  ],
  price: 3350,
  originalPrice: 3700,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Embrace style and sustainability with our Eco-Chic Gift Box, featuring a bamboo-inspired notebook, sleek bamboo water bottle, and smooth bamboo pen—all crafted from eco-friendly, reusable materials. Perfect for work, travel, and gifting, this elegant set combines natural charm with everyday functionality, helping reduce plastic waste while adding a touch of earthy sophistication to your routine or someone special’s day.
`,
},
{
  id: "The Sustainable Way",
  name: "The Sustainable Way",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860678/eco-friendly-corporate-gift-hamper_o0ec28.webp",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860689/eco-friendly-copper-gift_s2dfhm.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860678/eco-friendly-corporate-gift-hamper_o0ec28.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860677/WoodenLeafCoaster_1_mbveo9.webp ",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860674/IndividualDiwaliProducts_-4_422fe08b-08a0-4070-aa5c-40fd6992e3b3_ldx3ke.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860673/CoconutCandle_1_oywh5h.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762860672/wooden-slider-gift-box_p1qgju.webp"
  ],
  price: 2290,
  originalPrice: 3290,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Elevate your eco-conscious gifting with The Sustainable Way hamper, a thoughtfully curated box designed with sustainability and style in mind. Set inside a reusable wooden slider-lid box, this elegant hamper includes a pair of half‑hammered copper glasses, a coconut-shell candle, two leaf-carved wooden coasters, and two packs of golden almond brittle, all tied together with a greeting card of your choice. Each item is sustainably crafted from natural coconut shell and wood to plant-based brittle, making it perfect for mindful celebrations or eco-friendly gifting.

Whether it’s to delight at Diwali, to honor someone’s green lifestyle, or to serve as a standout corporate or personal gift, this hamper combines rustic aesthetics with premium packaging. Ideal for recipients who value sustainability without compromising on elegance. Celebrate consciously and beautifully with a gift that’s good for them and kind to the planet.
`,
},
{
  id: "Chef’s Essentials",
  name: "Chef’s Essentials",
  image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/gift-for-chef_yjig61.webp",
  images: [
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/gift-for-chef_yjig61.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/Akshita_sShoot-23_hugazr.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861558/IMG_5659_720x_53d5d698-01b2-43b3-a000-5b0c88a8adaa_du8isp.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861557/DSC03336_720x_4820ed35-b332-4def-8039-a28a03922a23_gqqgva.webp",
    "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762861557/20210822-IMG_2803_720x_75a21a2f-c1a5-4232-b6b8-cefcd0661ac8_f20a1t.webp"
  ],
  price: 2990,
  originalPrice: 3290,
  category: "promotional-gifts",
  subCategory: "eco",
  description: `Treat the special women in your life with a delightful culinary experience with our Chef’s Essentials gift hamper, specially curated for the kitchen enthusiast in her. 
  Combining practicality with style and sentiment, this gift hamper for ladies is the perfect way to celebrate their love of cooking. 
  For the amazing chefs who make delicious and sumptuous recipes with love as their secret ingredient, this gift hamper is one of the unique gifts for women. 
  Beautifully packed in an eco-friendly reusable gift box the premium products and cooking equipment encourage experimentation and enhance culinary adventures. 
  The Chef's Essentials Gift Hamper is the perfect way to spread the joy of delicious food. 
  You can add a personalized message to convey your love and appreciation to the chef, making this gift even more memorable. 
`,
},

 {
    id: "Rasatva Ruvaa - Nirvana | Coffee Supreme | Gourmet Coffee Gift Hamper | Premium Corporate Gift for Employees | Anniversary, Festive Gift for Friends & Family",
    name: "Rasatva Ruvaa - Nirvana | Coffee Supreme | Gourmet Coffee Gift Hamper | Premium Corporate Gift for Employees | Anniversary, Festive Gift for Friends & Family",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862366/91-W9eTKZnL._SX569__mwcjk2.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862366/91-W9eTKZnL._SX569__mwcjk2.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862293/81jFlp9iC4L._SX679__e8dtap.jpg",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862295/Gemini_Generated_Image_uefi0yuefi0yuefi_xgqxwf.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762862294/Gemini_Generated_Image_6jl61h6jl61h6jl6_bqkpah.png"
    ],
    price: 2500,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
      "Deluxe premium collection with assorted dryfruits and chocolates.",
  },
{
    id: "Good Wishes Sustainable Hamper",
    name: "Good Wishes Sustainable Hamper",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864167/good-wishes-sustainable-hamper_2_tteec7.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864167/good-wishes-sustainable-hamper_2_tteec7.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762863632/good-wishes-sustainable-hamper_1_sqaho0.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762863631/good-wishes-sustainable-hamper_3_dqueop.webp"
    ],
    price: 2499,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
      `This elegant gift box is the perfect way to show your loved ones that you care about the environment This beautiful and thoughtful gift comes with personalised text on a reusable pinewood box and is filled with sustainable goodies All of the sustainable items are presented in a reusable box making it an ecofriendly and beautiful gift for any occasion
Product Details

Copper Glass Set of 2
Love and Light Coaster Set of 2
Mix Dry fruits Jar 100 gms
Copper Planter 3 x 7.62 x 10.16 cms
Green Potpourri in Jute Potli
Reusable Personalised Pinewood Box 10 x 25.40 x 114.30 cms
Net Quantity 1 Set
Dimensions 27x27x14 cm
Weight Approx 1 Kg
Country of Origin India
Vegetarian`,
  },
  {
    id: "Shaadmaan Luxury Gift Box",
    name: "Shaadmaan Luxury Gift Box",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864276/UntitledSession00049_iqirtx.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864276/UntitledSession00049_iqirtx.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762864277/PurpleBird-19thDec202200450_crop_r0hers.webp"
    ],
    price: 2700,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
     `If you or your gift recipient are anything like us, candles will make them happy. 
     Those whose love language is smell, know the sheer pleasure associated with a fragrant candle. Especially, when the fragrance is of rose - the ultimate symbol of love, passion and romance.
      Double the joy of gifting, with the Shaadmaan, curation with a pair of silver plated Baagh rose candles. Cheers to new beginnings!`,
  },
  {
    id: "Tea Candle Holder",
    name: "Tea Candle Holder",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762938753/CSH041_i77c6h.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762938753/CSH041_i77c6h.webp",
      
    ],
    price: 2499,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
     `Elevate your gifting game with our hamper featuring a set of 2 tea light holders. 
     These beautifully handcrafted holders, made from brass and silver-plated with a lacquer finish, add a touch of elegance and warmth to any setting.`,
  },
  {
    id: "Premium Passport Holder",
    name: "Premium Passport Holder",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762939516/CSSD219_fp1aaz.png",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762939516/CSSD219_fp1aaz.png",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762939296/CSSD219A_ztllrk.webp"
      
    ],
    price: 5400,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
     `Elevate your travel essentials with our luxurious passport holder, crafted from high-quality brass, silver-plated, and lacquered for durability. This sleek and sophisticated design offers both style and protection for your passport. Its compact size ensures it fits perfectly in any travel bag. Ideal for discerning travelers who value elegance and practicality. Travel in style with this exquisite passport holder.`,
  },
  {
    id: "Silver Bowl",
    name: "Silver Bowl",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762940929/Silver_Bowl_crcvzg.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762940929/Silver_Bowl_crcvzg.webp"
      
    ],
    price: 4950,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
     `One of our subtle collections, the decorated bowl may be used for holding potpourri or chocolates. 
     Completely handcrafted, made in brass and lacquered, it is a beautiful piece to own or gift!`,
  },
  {
    id: "Decorative Bowl Set",
    name: "Decorative Bowl Set",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941096/Bowl_Set_hzo63b.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941096/Bowl_Set_hzo63b.webp"
      
    ],
    price: 9999,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
     `Make every day festive by the way you serve. 
     Our decorated bowl set comes in set of three and is completely handcrafted, silver-plated and lacquered. Add potpourri or dry eatables and keep it for personal use or gifting.`,
  },
  {
    id: "Silver Plated Plate",
    name: "Silver Plated Plate",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941296/CSTW059---POOJA-THALI_oyx5up.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762941296/CSTW059---POOJA-THALI_oyx5up.webp"
      
    ],
    price: 7499,
    category: "promotional-gifts",
    subCategory: "premium",
    description:
     `Make every day festive by the way you serve. 
     Our decorated bowl set comes in set of three and is completely handcrafted, silver-plated and lacquered. Add potpourri or dry eatables and keep it for personal use or gifting.`,
  },
  // PROMO - subCategory: apparel
  {
    id: "promo-apparel-1",
    name: "Apparel & Wearable Pack - A",
    image: "https://picsum.photos/seed/promo-apparel-1/600/400",
    images: [],
    price: 899,
    category: "promotional-gifts",
    subCategory: "apparel",
    description: "Branded t-shirt/scarf promotional wearable.",
  },
  // PROMO - subCategory: apparel
  {
    id: "promo-apparel-2",
    name: "Apparel & Wearable Pack - B",
    image: "https://picsum.photos/seed/promo-apparel-2/600/400",
    images: [],
    price: 1299,
    category: "promotional-gifts",
    subCategory: "apparel",
    description: "Premium wearable set for corporate gifting.",
  },
 

  // PROMO - subCategory: premium
  {
    id: "promo-premium-1",
    name: "Premium Luxury Hamper - A",
    image: "https://picsum.photos/seed/promo-premium-1/600/400",
    images: [],
    price: 2999,
    originalPrice: 3499,
    category: "corporates",
    subCategory: "premium",
    description: "High-end premium hamper for executive gifting.",
  },
  
  {
    id: "corp-onboarding-1",
    name: "Employee Onboarding Kit - Starter",
    image: "https://picsum.photos/seed/corp-onboarding-1/600/400",
    images: [],
    price: 849,
    category: "corporates",
    subCategory: "onboarding",
    description: "Welcome kit for new employees: notebook, pen, and mug.",
  },
  {
    id: "corp-onboarding-2",
    name: "Employee Onboarding Kit - Pro",
    image: "https://picsum.photos/seed/corp-onboarding-2/600/400",
    images: [],
    price: 1299,
    category: "corporates",
    subCategory: "onboarding",
    description: "Premium onboarding kit with branded apparel and stationery.",
  },

  // CORPORATE - subCategory: anniversary
  {
    id: "corp-anniversary-1",
    name: "Work Anniversary Gift - Classic",
    image: "https://picsum.photos/seed/corp-anniversary-1/600/400",
    images: [],
    price: 999,
    category: "corporates",
    subCategory: "anniversary",
    description: "Elegant anniversary hamper with sweets and a greeting card.",
  },
  {
    id: "corp-anniversary-2",
    name: "Work Anniversary Gift - Premium",
    image: "https://picsum.photos/seed/corp-anniversary-2/600/400",
    images: [],
    price: 1799,
    category: "corporates",
    subCategory: "anniversary",
    description:
      "Premium dry-fruit and chocolate hamper for milestone anniversaries.",
  },

  // CORPORATE - subCategory: festival
  {
    id: "corp-festival-1",
    name: "Festival Hamper - A",
    image: "https://picsum.photos/seed/corp-festival-1/600/400",
    images: [],
    price: 1499,
    category: "corporates",
    subCategory: "festival",
    description:
      "Festive hamper suitable for corporate gifting during festivals.",
  },
  {
    id: "corp-festival-2",
    name: "Festival Hamper - B",
    image: "https://picsum.photos/seed/corp-festival-2/600/400",
    images: [],
    price: 2199,
    category: "corporates",
    subCategory: "festival",
    description: "Deluxe festival hamper with assorted sweets and decor.",
  },

  // CORPORATE - subCategory: funfriday
  {
    id: "corp-funfriday-1",
    name: "Fun-Friday Hamper - Snacks",
    image: "https://picsum.photos/seed/corp-funfriday-1/600/400",
    images: [],
    price: 599,
    category: "corporates",
    subCategory: "funfriday",
    description: "Lightweight snack pack for office Fun-Friday activities.",
  },
  {
    id: "corp-funfriday-2",
    name: "Fun-Friday Hamper - Games",
    image: "https://picsum.photos/seed/corp-funfriday-2/600/400",
    images: [],
    price: 899,
    category: "corporates",
    subCategory: "funfriday",
    description: "Small games & treats bundle to boost team morale.",
  },

  // CORPORATE - subCategory: premium
  {
    id: "corp-premium-1",
    name: "Premium Thank-you Hamper - A",
    image: "https://picsum.photos/seed/corp-premium-1/600/400",
    images: [],
    price: 2999,
    category: "corporates",
    subCategory: "premium",
    description: "Luxury thank-you hamper for VIP clients and executives.",
  },
  {
    id: "corp-premium-2",
    name: "Premium Thank-you Hamper - B",
    image: "https://picsum.photos/seed/corp-premium-2/600/400",
    images: [],
    price: 3999,
    category: "corporates",
    subCategory: "premium",
    description:
      "Executive hamper with dry fruits, chocolates and premium packaging.",
  },

  // CORPORATE - subCategory: partnership
  {
    id: "corp-partnership-1",
    name: "Partnership Welcome Box - A",
    image: "https://picsum.photos/seed/corp-partnership-1/600/400",
    images: [],
    price: 1899,
    category: "corporates",
    subCategory: "partnership",
    description: "Welcome box for new partners with branded items.",
  },
  {
    id: "corp-partnership-2",
    name: "Partnership Welcome Box - B",
    image: "https://picsum.photos/seed/corp-partnership-2/600/400",
    images: [],
    price: 2499,
    category: "corporates",
    subCategory: "partnership",
    description: "Deluxe partner welcome kit with premium samples.",
  },

  // CORPORATE - subCategory: eco
  {
    id: "corp-eco-1",
    name: "Eco Promotional Gift - A",
    image: "https://picsum.photos/seed/corp-eco-1/600/400",
    images: [],
    price: 699,
    category: "corporates",
    subCategory: "eco",
    description:
      "Eco-friendly corporate gifts with jute and sustainable items.",
  },
  {
    id: "corp-eco-2",
    name: "Eco Promotional Gift - B",
    image: "https://picsum.photos/seed/corp-eco-2/600/400",
    images: [],
    price: 999,
    category: "corporates",
    subCategory: "eco",
    description: "Sustainable gift set for corporate branding.",
  },

  // CORPORATE - subCategory: samples
  {
    id: "corp-samples-1",
    name: "Product Samples / Launch Kit - A",
    image: "https://picsum.photos/seed/corp-samples-1/600/400",
    images: [],
    price: 1199,
    category: "corporates",
    subCategory: "samples",
    description: "Sample kit for product launches and demos.",
  },
  {
    id: "corp-samples-2",
    name: "Product Samples / Launch Kit - B",
    image: "https://picsum.photos/seed/corp-samples-2/600/400",
    images: [],
    price: 1599,
    category: "corporates",
    subCategory: "samples",
    description: "Extended launch kit with multiple product samples.",
  },

  // === CORPORATE ITEMS END ===

  // === OCCASIONAL ITEMS (used by OccasionalGifts page) START ===
  // These product objects were added for the Occasional Gifts page and are grouped
  // here so you can find and edit them easily. Each has `category: 'occasional-gifts'`
  // and a `subCategory` value used by the occasional page strip.

  // OCCASIONAL - subCategory: wedding
  {
    id: "Open Tray Square Gift Hamper",
    name: "Open Tray Square Gift Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951306/OpenTraySquareGiftHamper_h2yb2d.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951306/OpenTraySquareGiftHamper_h2yb2d.webp"],
    price: 800,
    category: "occasional-gifts",
    subCategory: "wedding",
    description:
        `Open Tray Square Gift Hamper includes:

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Metal Basket
Floral Decor`
  },
  {
    id: "Stripes Jute Bag Room Hamper",
    name: "Stripes Jute Bag Room Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951305/Eco-friendly_Rakhi_delight_bag_for_sister_ta0lou.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951305/Eco-friendly_Rakhi_delight_bag_for_sister_ta0lou.webp"],
    price: 630,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Choco Parlour Room Hamper includes :

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Stripes Jute Bag`
  },
  {
    id: "Wedding Serenity Hamper",
    name: "Wedding Serenity Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951304/IMG_9424_1_srsk9u.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951304/IMG_9424_1_srsk9u.webp"],
    price: 850,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Wedding Room Hamper includes:

Lays Chips
Kurkure
Real Juice
Coca Cola Can
Cake 
Doritos
Cadbury Cookies
Bhujia
Metal Jute Basket - 12 x 6 x 6 inches
Net decoration
Please mention any name personalisation or customisation requirement while checking out. For any other queries drop us a message on Whatsapp, link can be found on the bottom right corner.

Gifting Recommendation:

Immerse your guests in an atmosphere of opulence with our hotel-themed wedding room hampers. From sumptuous bed linens to carefully curated amenities, each item is selected to enhance the comfort and style of their stay.

Why is Wedding Room Hamper the best wedding gift for your guests?

Transform your wedding venue into a haven of luxury and warmth for your guests with our Wedding Room Hampers. Elevate their experience, make them feel truly cherished, and set the stage for unforgettable moments during your joyous celebration. Because every guest deserves to be a part of a love story as beautiful as yours.`
  },
  {
    id: "Snack Time Bliss Basket hamper",
    name: "Snack Time Bliss Basket hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951302/SnackTimeBlissBaskethamper_oamw7t.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951302/SnackTimeBlissBaskethamper_oamw7t.webp"],
    price: 780,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Wedding Room Hamper includes:

Lays
Kurkure
Real Juice
Coca Cola Can
Britannia Cake
Doritos
Cadbury Cookies
Paper Boat Aamras
Organza Festive Tray`
  },
  {
    id: "Gourmet Room Gift Hamper",
    name: "Gourmet Room Gift Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951301/GourmetRoomGiftHamper_sb42gk.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951301/GourmetRoomGiftHamper_sb42gk.webp"],
    price: 830,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A delightful blend of treats, perfect for any occasion! This thoughtfully curated hamper comes packed with everyone’s favorite snacks and beverages, making it an instant crowd-pleaser.

Inside the Hamper:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Fruit Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Beautifully presented in a premium transparent gift bag, this hamper is the perfect balance of taste, style, and joy — ideal for gifting or indulgence!`
  },
  {
    id: "Snack & Sip Delight Box",
    name: "Snack & Sip Delight Box",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951300/SnackSensationsRoomGiftHampers_jdgh5j.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951300/SnackSensationsRoomGiftHampers_jdgh5j.webp"],
    price: 720,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `delightful hamper curated to bring joy, flavor, and festivity to any room! Bursting with everyone’s favorite snacks and beautifully decorated, this hamper is perfect for welcoming guests, gifting, or celebrating special occasions.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Beautifully arranged on a Festive Tray, adorned with elegant Net Wrapping and Floral Décor, the Snack Sensations Room Gift Hamper is a perfect blend of taste, presentation, and celebration.`
  },
  {
    id: "The Bloom & Bliss Hamper",
    name: "The Bloom & Bliss Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951298/SnackDelighthamper_lkaid2.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951298/SnackDelighthamper_lkaid2.webp"],
    price: 700,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A perfect treat for every occasion, the Snack Delight Hamper is crafted to bring smiles, flavor, and freshness to your celebrations. Thoughtfully curated with everyone’s favorite snacks and beverages, it’s ideal for welcoming guests, gifting, or adding a touch of joy to any moment.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Packed in a beautiful printed jute bag, this hamper blends taste with style — a perfect combination of delicious indulgence and elegant presentation.`
  },
  {
    id: "The Luxe Snack Affair",
    name: "The Luxe Snack Affair (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951297/SensationalGourmetSnacksRoomGiftHamper_hlkcdn.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951297/SensationalGourmetSnacksRoomGiftHamper_hlkcdn.webp"],
    price: 820,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A tastefully curated hamper designed to add joy, flavor, and sophistication to every occasion! The Sensational Gourmet Snacks Hamper is filled with everyone’s favorite treats, making it an ideal choice for festive gifting, hotel welcomes, or special celebrations.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🥭 Paper Boat Aamras

Beautifully presented in an elegant Metal Basket adorned with Floral Décor, this hamper perfectly blends taste, luxury, and charm — creating a delightful gifting experience that leaves a lasting impression.`
 },
 {
    id: "The Signature Welcome Basket",
    name: "The Signature Welcome Basket (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951296/In-RoomSnackHamper_h3z7a8.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951296/In-RoomSnackHamper_h3z7a8.webp"],
    price: 420,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A warm and delightful gesture for any occasion, the Gourmet Welcome Snack Hamper is thoughtfully curated to bring comfort, flavor, and festivity to every guest experience. Perfect for hotel room welcomes, gifting, or corporate hospitality, it’s a tasteful blend of indulgence and charm.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Frooti
🍰 Britannia Cake
🍪 Cadbury Cookies
🍫 Munch
🌀 Orbit

Elegantly packed in a Festive Paper Bag with Ribbon Decoration, this hamper combines simplicity and sophistication — making it the perfect treat to refresh, surprise, and delight.`},

{
    id: "Elegant Dome Gift Collect",
    name: "Elegant Dome Gift Collect (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/DomeRoomGiftHamper_btlnir.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/DomeRoomGiftHamper_btlnir.webp"],
    price: 749,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A perfect blend of taste, freshness, and thoughtful hosting, the Dome Room Gift Hamper is designed to make every welcome feel special. Ideal for hotel room greetings, guest hospitality, celebrations, or thoughtful gifting, it brings together comfort, convenience, and delightful snacking in one charming package.

✨ What’s Inside:
🍟 Lays
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🧃 Paper Boat Aamras
🧺 Premium Big Basket

Beautifully arranged in a Premium Dome-Style Basket, this hamper blends elegance with everyday indulgence — making it the perfect surprise to refresh, delight, and create a memorable experience for any recipient.`
},
{
    id: "Royal Comfort Room Gift Hamper",
    name: "Royal Comfort Room Gift Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/ClassicEleganceRoomGiftHamper_etz0um.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951295/ClassicEleganceRoomGiftHamper_etz0um.webp"],
    price: 811,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A refined blend of taste, style, and warm hospitality, the Classic Elegance Room Gift Hamper is curated to elevate every guest experience. Perfect for hotel welcomes, celebrations, or thoughtful gifting, this hamper brings together premium snacks and aesthetic presentation for a truly memorable touch.

✨ What’s Inside:
🍟 Lays
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🧃 Paper Boat Aamras
🧺 Metal Basket
🌸 Floral Décor

Beautifully presented in a Metal Basket adorned with floral decor, this hamper offers the perfect mix of indulgence and elegance — making every welcome feel special, warm, and unforgettable.`
},
{
    id: "Heritage Room Gift Hamper",
    name: "Heritage Room Gift Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/AztecRoomGiftHamper_vudwga.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/AztecRoomGiftHamper_vudwga.webp"],
    price: 699,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `The Aztec Wedding Room Gift Hamper is a stunning blend of celebration, warmth, and thoughtful hospitality—perfect for welcoming wedding guests or adding a touch of festivity to any special occasion. Designed with vibrant aesthetics and curated with premium treats, this hamper delivers joy in every detail.

✨ What’s Inside:
🍟 Lays
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Britannia Cake
🌮 Doritos
🍪 Cadbury Cookies
🧃 Paper Boat Aamras
🎁 Festive Tray
✨ Net Decoration
🌸 Floral Décor

Expertly arranged on a Festive Tray with elegant Net and Floral Decoration, this hamper blends modern indulgence with wedding charm—making every guest feel welcomed, appreciated, and truly celebrated.`},

{
    id: "Guest Delight Room Hamper",
    name: "Guest Delight Room Hamper (Room Hamper)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/IMG_9399_1_in0i46.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1762951294/IMG_9399_1_in0i46.webp"],
    price: 649,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Show your appreciation to your guests with thoughtful, personalized tokens of gratitude. Our Wedding Room Hampers are crafted to make every guest feel welcomed, valued, and truly part of your celebration. You can also add custom welcome notes, itinerary details, or keepsakes to make their stay even more memorable.

✨ What’s Inside:
🍟 Lays Chips
🔥 Kurkure
🧃 Real Juice
🥤 Coca-Cola Can
🍰 Cake
🌮 Doritos
🍪 Cadbury Cookies
🥨 Bhujia
👜 Transparent Jute Bag (11 × 6 × 6 inches)

Please mention any name personalization or customization requirements during checkout. For any additional queries, feel free to message us on WhatsApp — the link is available on the bottom right corner.

Gifting Recommendation

Immerse your guests in an atmosphere of warmth and comfort with our beautifully curated wedding room hampers. Thoughtfully selected snacks, elegant packaging, and personalized touches ensure your guests enjoy a welcoming experience that feels luxurious and heartfelt.

Why the Wedding Room Hamper Is the Perfect Gift for Your Guests

Transform your wedding venue into a haven of joy and hospitality. Our Wedding Room Hampers elevate your guests’ experience, making them feel cherished from the moment they arrive. These delightful treats and thoughtful inclusions add a personal touch, creating unforgettable moments throughout your celebration.
Because every guest deserves to be part of a love story as beautiful as yours.`},
{
    id: "Haldi,Mehendi,Teej favour ",
    name: "Haldi / Mehendi / Teej Hampers",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104826/96F25A36-FE58-44E6-BD5C-58E3CC771367_namxl0.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104826/96F25A36-FE58-44E6-BD5C-58E3CC771367_namxl0.webp"],
    price: 199,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A beautifully crafted floral zari potli with an ornate pearl handle forms the centerpiece of this charming gifting set. Paired with a stunning kundan pearl bracelet and a matching kundan ring, it brings together tradition and elegance in perfect harmony.

To complete the ensemble, a fragrant gajra adds a touch of festive grace, while a saunf / mehendi cone provides the classic traditional element, making this set ideal for weddings, mehendi ceremonies, festive gifting, or bridal favors.
`},
{
    id: "Haldi & Mehandi Potli ",
    name: "HALDI & MEHANDI Potli",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-02at11.31.45PM_mcwvad.jpg",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-02at11.31.45PM_mcwvad.jpg"],
    price: 120,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `This exquisite gifting ensemble features a luxurious Organza Banarasi Potli, blending traditional craftsmanship with modern elegance. Complementing the potli is a charming Pearl Bandhej Bracelet and an Adjustable Bandhej Ring, both designed to add a festive and stylish touch to any look.

A delicate Gajra Scrunchie brings in floral grace, making it perfect for weddings, mehendi functions, festive favors, or bridal gifting. Available in assorted colors, this set offers the perfect balance of beauty, tradition, and thoughtful detailing.
`},
{
    id: "Haldi Hamper ",
    name: "Haldi Hamper",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-22at11.16.39PM_prpjfr.jpg",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763104824/WhatsAppImage2025-02-22at11.16.39PM_prpjfr.jpg"],
    price: 99,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `A vibrant Gota Potli in mix colors sets the tone for this beautifully curated festive set. Paired with a pair of gota beads bangles in coordinated mix colors, it adds a charming traditional touch perfect for weddings, haldi, mehendi, or festive celebrations.

The ensemble also includes a delicate floral maangtika and a floral adjustable ring, completing the look with a graceful blend of elegance and tradition. A personalised card adds a heartfelt touch, making this set an ideal choice for gifting or return favors that leave a lasting impression. 
`},
{
    id: "Haldi & Mehandi Hamper ",
    name: "Haldi & Mehandi Hamper",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/AEE11B1C-5EEA-4CAD-B8AF-FE69CE59BE24_qycmfv.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/AEE11B1C-5EEA-4CAD-B8AF-FE69CE59BE24_qycmfv.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/6748B2F0-2570-4400-AA66-1143A0C24C83_ifeygi.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763106087/52B68C93-EB76-488E-9ED5-4396E2DEA7E9_hpucp7.webp"
    ],
    price: 179,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `This charming gifting set includes a beautifully crafted Potli, perfect for festive occasions and celebrations. Paired with a Bangle Pair in mix colours, it adds a vibrant traditional touch to any outfit.

A colourful Bindi Sheet is included to enhance the look with classic elegance, along with a Mehendi Cone to complete the festive essentials. Thoughtful, simple, and beautifully curated — ideal for mehendi favors, wedding giveaways, or festive gifting.
`},
{
    id: "Handmade Earings Set ",
    name: "Handmade Earings Set",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763107051/CFE2353_D_ifpbol.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763107051/CFE2353_D_ifpbol.webp",
      "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763107051/CFE2357_D_x2blwn.webp"
    ],
    price: 479,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Presenting our exquisite “Dulhan ki Behen” Beaded Earrings, a signature piece from our handcrafted jewellery collection. More than just accessories, these earrings capture the charm of Indian tradition with a playful, character-inspired theme—perfect for Haldi and Mehndi celebrations.

Crafted with precision and artistry, the vibrant pink beads sway beautifully with every movement, adding a touch of festive sparkle to your look. Designed for the modern woman with a spirited heart, they feature a secure push-back closure that ensures comfort throughout long celebrations. Their lightweight build lets you enjoy every moment—from dancing to posing—without any discomfort.

Ideal for the bright, joyful vibes of spring and summer weddings, these earrings don’t just complement your ensemble—they complete it. Whether you’re a bridesmaid, a sister of the bride, or simply love festive elegance, the “Dulhan ki Behen” Beaded Earrings promise to make your entrance unforgettable.

A must-have for Haldi, Mehndi, and all wedding festivities, this pair is the perfect addition to any jewellery collection.
`},
{
    id: "3 jar dryfruit hamper",
    name: "3 Jar Dryfruit Hamper (Return Gifts)",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763110690/IMG-20250304-WA0005_cr90pz.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763110690/IMG-20250304-WA0005_cr90pz.webp"
    ],
    price: 899,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `Cashew: 200g
Almond: 200g
Kishmish: 200g

Elegantly packed in a premium MDF box with 3 airtight jars, this Wedding Return Gift Box brings together taste, health, and sophistication—perfect for thanking your guests with something truly meaningful.

Each jar is filled with high-quality Cashews, Almonds, and Kishmish, offering a thoughtful blend of wellness and indulgence. The airtight jars maintain freshness and hygiene, while the sleek MDF box adds a luxurious touch that enhances the overall presentation.

Ideal for weddings, engagements, and all festive ceremonies, these 3-jar dry fruit boxes are a symbol of warmth, gratitude, and refined hospitality. Compact, stylish, and easy to carry, they make the perfect take-home keepsake that guests truly appreciate.

With the rising trend of healthy and elegant gifting, these wedding return gift boxes have become a preferred choice across India. The box can also be personalized with the couple’s names, wedding date, or a heartfelt message, making every gift feel special and memorable.

A smart, elegant, and timeless wedding return gift—perfectly blending flavor, freshness, and heartfelt sentiment.
`},
{
    id: "Vibrant Haldi Rasam Gift Set",
    name: "Vibrant Haldi Rasam Gift Set",
    image: "https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763111033/47DFCC17-D0F6-4D37-939E-69FC9A463411_msnyio.webp",
    images: ["https://res.cloudinary.com/dzh2zxbvw/image/upload/v1763111033/47DFCC17-D0F6-4D37-939E-69FC9A463411_msnyio.webp"
    ],
    price: 249,
    category: "occasional-gifts",
    subCategory: "wedding",
    description: `This vibrant and culturally inspired hamper celebrates the rich charm of Rajasthan, making it a perfect pick for Haldi, Mehendi, wedding favors, or festive gifting.

✨ Includes:

👜 Rajasthani Theme Bag
(Traditional prints, design & color may vary — each piece carries its own unique charm.)

🧣 Bandhej Dupatta
(Mix colors available, crafted in classic tie-dye patterns for a bright and festive touch.)

🌼 Gota Beads Bangles
(Mix color pairs featuring intricate gota detailing, adding elegance and tradition to the ensemble.)

🔴 Colored Bindi Sheet
(Multiple sizes and colors to complete the traditional festive look.)

Thoughtfully curated with vibrant Rajasthani aesthetics, this hamper is perfect for adding joy, culture, and color to any celebration.
`},
  // OCCASIONAL - subCategory: engagement
  {
    id: "occ-engagement-1",
    name: "Engagement Celebration Box ",
    image: "https://picsum.photos/seed/occ-engagement-1/600/400",
    images: [],
    price: 1799,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: "Elegant snacks & keepsakes box for engagement parties.",
  },
  {
    id: "occ-engagement-2",
    name: "Engagement Keepsake Hamper",
    image: "https://picsum.photos/seed/occ-engagement-2/600/400",
    images: [],
    price: 2199,
    category: "occasional-gifts",
    subCategory: "engagement",
    description: "Keepsake hamper with personalized greeting and treats.",
  },

  // OCCASIONAL - subCategory: anniversary
  {
    id: "occ-anniversary-1",
    name: "Anniversary Delight Hamper",
    image: "https://picsum.photos/seed/occ-anniversary-1/600/400",
    images: [],
    price: 1999,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: "Classic anniversary hamper with chocolates and dry fruits.",
  },
  {
    id: "occ-anniversary-2",
    name: "Anniversary Premium Hamper",
    image: "https://picsum.photos/seed/occ-anniversary-2/600/400",
    images: [],
    price: 2599,
    category: "occasional-gifts",
    subCategory: "anniversary",
    description: "Deluxe anniversary hamper with fine chocolates and wine.",
  },

  // OCCASIONAL - subCategory: baby-shower
  {
    id: "occ-babyshower-1",
    name: "Baby Shower Gift Set",
    image: "https://picsum.photos/seed/occ-babyshower-1/600/400",
    images: [],
    price: 1299,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description:
      "Soft toys and pamper items curated for baby shower celebrations.",
  },
  {
    id: "occ-babyshower-2",
    name: "Baby Welcome Hamper",
    image: "https://picsum.photos/seed/occ-babyshower-2/600/400",
    images: [],
    price: 1599,
    category: "occasional-gifts",
    subCategory: "baby-shower",
    description: "Welcome hamper with baby essentials and a keepsake card.",
  },

  // OCCASIONAL - subCategory: mothers-day
  {
    id: "occ-mothersday-1",
    name: "Mother's Day Pamper Box",
    image: "https://picsum.photos/seed/occ-mothersday-1/600/400",
    images: [],
    price: 999,
    category: "occasional-gifts",
    subCategory: "mothers-day",
    description: "A thoughtful pamper box to celebrate Mother's Day.",
  },
  {
    id: "occ-mothersday-2",
    name: "Mother's Day Deluxe Set",
    image: "https://picsum.photos/seed/occ-mothersday-2/600/400",
    images: [],
    price: 1499,
    category: "occasional-gifts",
    subCategory: "mothers-day",
    description: "Deluxe pamper set with beauty treats and a floral card.",
  },

  // OCCASIONAL - subCategory: fathers-day
  {
    id: "occ-fathersday-1",
    name: "Father's Day Classic Kit",
    image: "https://picsum.photos/seed/occ-fathersday-1/600/400",
    images: [],
    price: 899,
    category: "occasional-gifts",
    subCategory: "fathers-day",
    description: "Grooming and snack set to appreciate dads on Father's Day.",
  },
  {
    id: "occ-fathersday-2",
    name: "Father's Day Premium Hamper",
    image: "https://picsum.photos/seed/occ-fathersday-2/600/400",
    images: [],
    price: 1299,
    category: "occasional-gifts",
    subCategory: "fathers-day",
    description: "Premium grooming hamper with artisanal snacks.",
  },

  // OCCASIONAL - subCategory: childrens-day
  {
    id: "occ-childrensday-1",
    name: "Children's Day Fun Hamper",
    image: "https://picsum.photos/seed/occ-childrensday-1/600/400",
    images: [],
    price: 699,
    category: "occasional-gifts",
    subCategory: "childrens-day",
    description: "Playful treats and small toys for Children's Day.",
  },
  {
    id: "occ-childrensday-2",
    name: "Children's Party Pack",
    image: "https://picsum.photos/seed/occ-childrensday-2/600/400",
    images: [],
    price: 899,
    category: "occasional-gifts",
    subCategory: "childrens-day",
    description: "Party-friendly snacks and activity kits for kids.",
  },

  // OCCASIONAL - subCategory: friendship-day
  {
    id: "occ-friendship-1",
    name: "Friendship Day Delight",
    image: "https://picsum.photos/seed/occ-friendship-1/600/400",
    images: [],
    price: 549,
    category: "occasional-gifts",
    subCategory: "friendship-day",
    description: "Small token gifts perfect for Friendship Day exchanges.",
  },
  {
    id: "occ-friendship-2",
    name: "Friendship Goodie Box",
    image: "https://picsum.photos/seed/occ-friendship-2/600/400",
    images: [],
    price: 799,
    category: "occasional-gifts",
    subCategory: "friendship-day",
    description: "Goodie box with treats and a message card for friends.",
  },

  // OCCASIONAL - subCategory: achievement
  {
    id: "occ-achievement-1",
    name: "Achievement Celebration Pack",
    image: "https://picsum.photos/seed/occ-achievement-1/600/400",
    images: [],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "achievement",
    description: "Congratulatory hamper for milestone achievements and wins.",
  },
  {
    id: "occ-achievement-2",
    name: "Achievement Premium Set",
    image: "https://picsum.photos/seed/occ-achievement-2/600/400",
    images: [],
    price: 1599,
    category: "occasional-gifts",
    subCategory: "achievement",
    description: "Premium congratulatory set with keepsakes and treats.",
  },

  // OCCASIONAL - subCategory: retirement
  {
    id: "occ-retirement-1",
    name: "Retirement Farewell Hamper",
    image: "https://picsum.photos/seed/occ-retirement-1/600/400",
    images: [],
    price: 1899,
    category: "occasional-gifts",
    subCategory: "retirement",
    description: "Tasteful hamper to send off colleagues into retirement.",
  },
  {
    id: "occ-retirement-2",
    name: "Retirement Keepsake Box",
    image: "https://picsum.photos/seed/occ-retirement-2/600/400",
    images: [],
    price: 2299,
    category: "occasional-gifts",
    subCategory: "retirement",
    description: "A keepsake hamper with personalized items for retirees.",
  },

  // OCCASIONAL - subCategory: farewell
  {
    id: "occ-farewell-1",
    name: "Farewell Keepsake Box",
    image: "https://picsum.photos/seed/occ-farewell-1/600/400",
    images: [],
    price: 799,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: "A small keepsake and treats box to say goodbye warmly.",
  },
  {
    id: "occ-farewell-2",
    name: "Farewell Memories Hamper",
    image: "https://picsum.photos/seed/occ-farewell-2/600/400",
    images: [],
    price: 1199,
    category: "occasional-gifts",
    subCategory: "farewell",
    description: "Memory-filled hamper to send off teams and colleagues.",
  },

  // OCCASIONAL - subCategory: picnic-hampers
  {
    id: "occ-picnic-1",
    name: "Picnic Hamper Essentials",
    image: "https://picsum.photos/seed/occ-picnic-1/600/400",
    images: [],
    price: 1499,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: "A compact picnic hamper with snacks and a picnic blanket.",
  },
  {
    id: "occ-picnic-2",
    name: "Deluxe Picnic Hamper",
    image: "https://picsum.photos/seed/occ-picnic-2/600/400",
    images: [],
    price: 2199,
    category: "occasional-gifts",
    subCategory: "picnic-hampers",
    description: "Large picnic hamper with gourmet snacks and utensils.",
  },

  // === OCCASIONAL ITEMS END ===

  // === FESTIVAL ITEMS (festival-gifts) START ===

  // Diwali Gifts
  {
    id: "fest-diwali-1",
    name: "Diwali Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-diwali-1/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description:
      "A celebratory Diwali hamper with sweets, diyas and dry fruits.",
  },
  {
    id: "fest-diwali-2",
    name: "Diwali Sweets & Decor Box",
    image: "https://picsum.photos/seed/fest-diwali-2/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Traditional sweets and decor items for Diwali celebrations.",
  },
  {
    id: "fest-diwali-3",
    name: "Diwali Corporate Hamper",
    image: "https://picsum.photos/seed/fest-diwali-3/600/400",
    images: [],
    price: 2499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Premium Diwali hamper ideal for corporate gifting.",
  },
  {
    id: "fest-diwali-4",
    name: "Diwali Mini Gift Set",
    image: "https://picsum.photos/seed/fest-diwali-4/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: "Compact Diwali set with sweets and small diyas.",
  },

  // Holi Hampers
  {
    id: "fest-holi-1",
    name: "Holi Colour & Sweets Hamper",
    image: "https://picsum.photos/seed/fest-holi-1/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Bright Holi hamper with gujiyas and colour packs.",
  },
  {
    id: "fest-holi-2",
    name: "Holi Family Hamper",
    image: "https://picsum.photos/seed/fest-holi-2/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "A family-sized Holi hamper with sweets and colours.",
  },
  {
    id: "fest-holi-3",
    name: "Holi Kids Pack",
    image: "https://picsum.photos/seed/fest-holi-3/600/400",
    images: [],
    price: 599,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Fun Holi pack for kids with safe colours and treats.",
  },
  {
    id: "fest-holi-4",
    name: "Holi Gourmet Hamper",
    image: "https://picsum.photos/seed/fest-holi-4/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "holi-hampers",
    description: "Gourmet sweets and savoury snacks perfect for Holi.",
  },

  // Raksha Bandhan Hampers
  {
    id: "fest-raksha-1",
    name: "Raksha Bandhan Keepsake Hamper",
    image: "https://picsum.photos/seed/fest-raksha-1/600/400",
    images: [],
    price: 1099,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description:
      "A thoughtful Raksha Bandhan set with sweets and gift keepsakes.",
  },
  {
    id: "fest-raksha-2",
    name: "Raksha Sibling Hamper",
    image: "https://picsum.photos/seed/fest-raksha-2/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Sweet hampers curated especially for siblings.",
  },
  {
    id: "fest-raksha-3",
    name: "Raksha Premium Gift Box",
    image: "https://picsum.photos/seed/fest-raksha-3/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Premium box with chocolates and keepsakes.",
  },
  {
    id: "fest-raksha-4",
    name: "Raksha Classic Set",
    image: "https://picsum.photos/seed/fest-raksha-4/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "raksha-bandhan-hampers",
    description: "Classic rakhi set with sweets and a small gift.",
  },

  // Eid Gifts
  {
    id: "fest-eid-1",
    name: "Eid Celebration Box",
    image: "https://picsum.photos/seed/fest-eid-1/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Traditional Eid sweets and savory treats in a beautiful box.",
  },
  {
    id: "fest-eid-2",
    name: "Eid Family Hamper",
    image: "https://picsum.photos/seed/fest-eid-2/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Large Eid hamper perfect for family gatherings.",
  },
  {
    id: "fest-eid-3",
    name: "Eid Sweets Pack",
    image: "https://picsum.photos/seed/fest-eid-3/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Box of assorted traditional sweets for Eid.",
  },
  {
    id: "fest-eid-4",
    name: "Eid Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-eid-4/600/400",
    images: [],
    price: 2199,
    category: "festival-gifts",
    subCategory: "eid-gifts",
    description: "Deluxe Eid hamper with premium treats and dates.",
  },

  // Christmas Gifts
  {
    id: "fest-christmas-1",
    name: "Christmas Gift Hamper",
    image: "https://picsum.photos/seed/fest-christmas-1/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Festive Christmas hamper with cookies, chocolates and decor.",
  },
  {
    id: "fest-christmas-2",
    name: "Christmas Family Box",
    image: "https://picsum.photos/seed/fest-christmas-2/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Family-sized Christmas hamper with assorted treats.",
  },
  {
    id: "fest-christmas-3",
    name: "Christmas Cookies & More",
    image: "https://picsum.photos/seed/fest-christmas-3/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "A selection of festive cookies and sweet treats.",
  },
  {
    id: "fest-christmas-4",
    name: "Christmas Premium Hamper",
    image: "https://picsum.photos/seed/fest-christmas-4/600/400",
    images: [],
    price: 2499,
    category: "festival-gifts",
    subCategory: "christmas-gifts",
    description: "Premium hamper with chocolates, wine and decor items.",
  },

  // New Year Gifts
  {
    id: "fest-newyear-1",
    name: "New Year Celebration Pack",
    image: "https://picsum.photos/seed/fest-newyear-1/600/400",
    images: [],
    price: 1399,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Ring in the New Year with snacks and celebratory treats.",
  },
  {
    id: "fest-newyear-2",
    name: "New Year Party Box",
    image: "https://picsum.photos/seed/fest-newyear-2/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Party-ready snacks and treats for New Year celebrations.",
  },
  {
    id: "fest-newyear-3",
    name: "New Year Gourmet Set",
    image: "https://picsum.photos/seed/fest-newyear-3/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Gourmet selection to welcome the New Year.",
  },
  {
    id: "fest-newyear-4",
    name: "New Year Mini Pack",
    image: "https://picsum.photos/seed/fest-newyear-4/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "new-year-gifts",
    description: "Small celebratory pack ideal for gifting.",
  },

  // Navratri Gifts
  {
    id: "fest-navratri-1",
    name: "Navratri Festive Hamper",
    image: "https://picsum.photos/seed/fest-navratri-1/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Seasonal Navratri hamper with traditional sweets and snacks.",
  },
  {
    id: "fest-navratri-2",
    name: "Navratri Family Box",
    image: "https://picsum.photos/seed/fest-navratri-2/600/400",
    images: [],
    price: 1399,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Family-sized Navratri hamper with regional treats.",
  },
  {
    id: "fest-navratri-3",
    name: "Navratri Sweets Pack",
    image: "https://picsum.photos/seed/fest-navratri-3/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Assorted sweets for Navratri celebrations.",
  },
  {
    id: "fest-navratri-4",
    name: "Navratri Premium Hamper",
    image: "https://picsum.photos/seed/fest-navratri-4/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "navratri-gifts",
    description: "Premium hamper with festive specialties.",
  },

  // Thanksgiving Gifts
  {
    id: "fest-thanksgiving-1",
    name: "Thanksgiving Gourmet Box",
    image: "https://picsum.photos/seed/fest-thanksgiving-1/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Gourmet hamper perfect for Thanksgiving gatherings.",
  },
  {
    id: "fest-thanksgiving-2",
    name: "Thanksgiving Family Hamper",
    image: "https://picsum.photos/seed/fest-thanksgiving-2/600/400",
    images: [],
    price: 1799,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Family-sized hamper for a Thanksgiving feast.",
  },
  {
    id: "fest-thanksgiving-3",
    name: "Thanksgiving Treats Box",
    image: "https://picsum.photos/seed/fest-thanksgiving-3/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "A selection of seasonal treats for Thanksgiving.",
  },
  {
    id: "fest-thanksgiving-4",
    name: "Thanksgiving Deluxe Hamper",
    image: "https://picsum.photos/seed/fest-thanksgiving-4/600/400",
    images: [],
    price: 2299,
    category: "festival-gifts",
    subCategory: "thanksgiving-gifts",
    description: "Deluxe hamper with gourmet specialties.",
  },

  // Valentine's Day Gifts
  {
    id: "fest-valentine-1",
    name: "Valentine's Romantic Hamper",
    image: "https://picsum.photos/seed/fest-valentine-1/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "A romantic hamper with chocolates and a keepsake card.",
  },
  {
    id: "fest-valentine-2",
    name: "Valentine's Couple Box",
    image: "https://picsum.photos/seed/fest-valentine-2/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Couples' gift box with sweets and a card.",
  },
  {
    id: "fest-valentine-3",
    name: "Valentine's Chocolate Hamper",
    image: "https://picsum.photos/seed/fest-valentine-3/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Chocolate-focused hamper perfect for Valentine's Day.",
  },
  {
    id: "fest-valentine-4",
    name: "Valentine's Premium Set",
    image: "https://picsum.photos/seed/fest-valentine-4/600/400",
    images: [],
    price: 1699,
    category: "festival-gifts",
    subCategory: "valentines-day-gifts",
    description: "Premium romantic hamper with keepsakes and treats.",
  },

  // Easter Hampers
  {
    id: "fest-easter-1",
    name: "Easter Sweets Hamper",
    image: "https://picsum.photos/seed/fest-easter-1/600/400",
    images: [],
    price: 799,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Easter hamper with themed sweets and goodies.",
  },
  {
    id: "fest-easter-2",
    name: "Easter Family Box",
    image: "https://picsum.photos/seed/fest-easter-2/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Family-friendly Easter hamper with treats.",
  },
  {
    id: "fest-easter-3",
    name: "Easter Kids Pack",
    image: "https://picsum.photos/seed/fest-easter-3/600/400",
    images: [],
    price: 599,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Kids-focused Easter pack with chocolates and toys.",
  },
  {
    id: "fest-easter-4",
    name: "Easter Gourmet Hamper",
    image: "https://picsum.photos/seed/fest-easter-4/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "easter-hampers",
    description: "Gourmet Easter hamper with premium sweets.",
  },

  // Lohri Hampers
  {
    id: "fest-lohri-1",
    name: "Lohri Traditional Hamper",
    image: "https://picsum.photos/seed/fest-lohri-1/600/400",
    images: [],
    price: 899,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Lohri hamper with traditional treats and sesame sweets.",
  },
  {
    id: "fest-lohri-2",
    name: "Lohri Family Hamper",
    image: "https://picsum.photos/seed/fest-lohri-2/600/400",
    images: [],
    price: 1199,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Family-sized Lohri hamper with sweet treats.",
  },
  {
    id: "fest-lohri-3",
    name: "Lohri Sweets Pack",
    image: "https://picsum.photos/seed/fest-lohri-3/600/400",
    images: [],
    price: 699,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Traditional sweets pack for Lohri celebrations.",
  },
  {
    id: "fest-lohri-4",
    name: "Lohri Premium Hamper",
    image: "https://picsum.photos/seed/fest-lohri-4/600/400",
    images: [],
    price: 1499,
    category: "festival-gifts",
    subCategory: "lohri-hampers",
    description: "Premium Lohri hamper with curated items.",
  },

  // Onam Hampers
  {
    id: "fest-onam-1",
    name: "Onam Celebration Hamper",
    image: "https://picsum.photos/seed/fest-onam-1/600/400",
    images: [],
    price: 1299,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Onam hamper with regional sweets and curated gifts.",
  },
  {
    id: "fest-onam-2",
    name: "Onam Family Hamper",
    image: "https://picsum.photos/seed/fest-onam-2/600/400",
    images: [],
    price: 1599,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Family-sized Onam hamper with traditional items.",
  },
  {
    id: "fest-onam-3",
    name: "Onam Sweets Box",
    image: "https://picsum.photos/seed/fest-onam-3/600/400",
    images: [],
    price: 999,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Sweets box curated for Onam festivities.",
  },
  {
    id: "fest-onam-4",
    name: "Onam Premium Hamper",
    image: "https://picsum.photos/seed/fest-onam-4/600/400",
    images: [],
    price: 1999,
    category: "festival-gifts",
    subCategory: "onam-hampers",
    description: "Premium Onam hamper with regional specialties.",
  },

  // === FESTIVAL ITEMS END ===

  // === CHARITY ITEMS (charity-gifts) START ===

  // Charity Hampers for Kids
  {
    id: "charity-kids-1",
    name: "Kids Charity Hamper - Essentials A",
    image: "https://picsum.photos/seed/charity-kids-1/600/400",
    images: [],
    price: 499,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Basic essentials and treats for kids in need.",
  },
  {
    id: "charity-kids-2",
    name: "Kids Charity Hamper - Essentials B",
    image: "https://picsum.photos/seed/charity-kids-2/600/400",
    images: [],
    price: 599,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Clothing and snacks packed for children.",
  },
  {
    id: "charity-kids-3",
    name: "Kids Activity & Snack Pack",
    image: "https://picsum.photos/seed/charity-kids-3/600/400",
    images: [],
    price: 549,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Fun activity set with educational goodies and snacks.",
  },
  {
    id: "charity-kids-4",
    name: "Kids Warm Winter Pack",
    image: "https://picsum.photos/seed/charity-kids-4/600/400",
    images: [],
    price: 699,
    category: "charity-gifts",
    subCategory: "kids",
    description: "Warm clothing and treats for colder months.",
  },

  // Charity Hampers for Teens
  {
    id: "charity-teens-1",
    name: "Teens Care Pack - Study & Snacks A",
    image: "https://picsum.photos/seed/charity-teens-1/600/400",
    images: [],
    price: 699,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Study supplies and nutritious snacks for teens.",
  },
  {
    id: "charity-teens-2",
    name: "Teens Care Pack - Study & Snacks B",
    image: "https://picsum.photos/seed/charity-teens-2/600/400",
    images: [],
    price: 749,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Back-to-school essentials and snack items.",
  },
  {
    id: "charity-teens-3",
    name: "Teens Hygiene & Snack Box",
    image: "https://picsum.photos/seed/charity-teens-3/600/400",
    images: [],
    price: 649,
    category: "charity-gifts",
    subCategory: "teens",
    description: "Hygiene essentials plus healthy snack options.",
  },
  {
    id: "charity-teens-4",
    name: "Teens Essentials Pack",
    image: "https://picsum.photos/seed/charity-teens-4/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "teens",
    description: "A comprehensive pack for teen needs.",
  },

  // Charity Hampers for Adults
  {
    id: "charity-adults-1",
    name: "Adults Care Hamper - Basics",
    image: "https://picsum.photos/seed/charity-adults-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Basic food and hygiene essentials for adults.",
  },
  {
    id: "charity-adults-2",
    name: "Adults Wellness Pack",
    image: "https://picsum.photos/seed/charity-adults-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Nutritious snacks and wellness items for adults.",
  },
  {
    id: "charity-adults-3",
    name: "Adults Family Essentials",
    image: "https://picsum.photos/seed/charity-adults-3/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Family-focused essentials and food items.",
  },
  {
    id: "charity-adults-4",
    name: "Adults Comfort Box",
    image: "https://picsum.photos/seed/charity-adults-4/600/400",
    images: [],
    price: 1099,
    category: "charity-gifts",
    subCategory: "adults",
    description: "Comfort items and packaged food for adults.",
  },

  // Charity Hampers for Elderly
  {
    id: "charity-elderly-1",
    name: "Elderly Care Hamper - Essentials",
    image: "https://picsum.photos/seed/charity-elderly-1/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Gentle-care and nutrition packs for the elderly.",
  },
  {
    id: "charity-elderly-2",
    name: "Elderly Comfort Box",
    image: "https://picsum.photos/seed/charity-elderly-2/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Warm clothing and gentle snacks for seniors.",
  },
  {
    id: "charity-elderly-3",
    name: "Elderly Wellness Pack",
    image: "https://picsum.photos/seed/charity-elderly-3/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Health-focused essentials and easy-to-eat foods.",
  },
  {
    id: "charity-elderly-4",
    name: "Elderly Care Premium",
    image: "https://picsum.photos/seed/charity-elderly-4/600/400",
    images: [],
    price: 1499,
    category: "charity-gifts",
    subCategory: "elderly",
    description: "Premium comfort and care items for elderly recipients.",
  },

  // Special Kids Charity Hampers
  {
    id: "charity-specialkids-1",
    name: "Special Kids Sensory Pack",
    image: "https://picsum.photos/seed/charity-specialkids-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Sensory toys and gentle snacks for special-needs kids.",
  },
  {
    id: "charity-specialkids-2",
    name: "Special Kids Care Box",
    image: "https://picsum.photos/seed/charity-specialkids-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Tailored care items and treats for special kids.",
  },
  {
    id: "charity-specialkids-3",
    name: "Special Kids Activity Set",
    image: "https://picsum.photos/seed/charity-specialkids-3/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Engaging activity set suitable for varied abilities.",
  },
  {
    id: "charity-specialkids-4",
    name: "Special Kids Care Premium",
    image: "https://picsum.photos/seed/charity-specialkids-4/600/400",
    images: [],
    price: 1199,
    category: "charity-gifts",
    subCategory: "special-kids",
    description: "Premium sets with supportive care items.",
  },

  // Charity Hampers for Widows
  {
    id: "charity-widows-1",
    name: "Widows Support Hamper A",
    image: "https://picsum.photos/seed/charity-widows-1/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Supportive packages with essentials and comfort items.",
  },
  {
    id: "charity-widows-2",
    name: "Widows Support Hamper B",
    image: "https://picsum.photos/seed/charity-widows-2/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Care and support items for widows and families.",
  },
  {
    id: "charity-widows-3",
    name: "Widows Essentials Box",
    image: "https://picsum.photos/seed/charity-widows-3/600/400",
    images: [],
    price: 799,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Essentials kit with food and hygiene items.",
  },
  {
    id: "charity-widows-4",
    name: "Widows Comfort Hamper",
    image: "https://picsum.photos/seed/charity-widows-4/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "widows",
    description: "Comforting hamper with treats and a keepsake.",
  },

  // All-Age Inclusive Charity Hampers
  {
    id: "charity-allage-1",
    name: "All-Age Inclusive Hamper - Basics",
    image: "https://picsum.photos/seed/charity-allage-1/600/400",
    images: [],
    price: 999,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Inclusive hamper designed for recipients of any age.",
  },
  {
    id: "charity-allage-2",
    name: "All-Age Family Hamper",
    image: "https://picsum.photos/seed/charity-allage-2/600/400",
    images: [],
    price: 1299,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Family-sized inclusive hamper with mixed items.",
  },
  {
    id: "charity-allage-3",
    name: "All-Age Essentials Box",
    image: "https://picsum.photos/seed/charity-allage-3/600/400",
    images: [],
    price: 899,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Essentials and treats suitable for diverse recipients.",
  },
  {
    id: "charity-allage-4",
    name: "All-Age Premium Hamper",
    image: "https://picsum.photos/seed/charity-allage-4/600/400",
    images: [],
    price: 1599,
    category: "charity-gifts",
    subCategory: "all-age-inclusive",
    description: "Premium inclusive hamper with curated items.",
  },
   {
    id: "The Luxury Family Feast Hamper",
    name: "The Luxury Family Feast Hamper",
    image: "https://i.ibb.co/0psvzhyJ/The-Family-Feast-Collections.png",
    price: 3599,
    originalPrice: 3999,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Super Luxury Box
• One Jar of Besan Laddu
• One Jar of Dryfruits Laddu
• Three Jars of Dried Fruits
• Two Jars of Potato Wafers
• One Box of Chocolate
• Lord Ganesha and Lakshmi Idol (Brass/Metal)
• Decorative Diya - 2 pcs
• Sweets Design Candle (Optional)
• Copper Water Bottle
• Premium Greeting Card
• Lotus Wall Hangings - 2 pcs`
  },
  {
    id: "The Jute Blessing",
    name: "The Jute Blessing",
    image: "https://i.ibb.co/LhZjYccG/The-Jute-Blessing.png",
    price: 1599,
    originalPrice: 1867,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Woven Basket
• Decorative Diyas-5pcs
• Cracker DEsign Chocolates-10pcs
• Homemaid Chips-200gms
• Decorative Flower Glass jar
• One Box of Chocolate
• Lotus Flower Wall Hanging
• Custom Note card
• Poutpuri
• Besan Laddu-250gms`
  },
  {
    id: "The Harmony",
    name: "The Harmony",
    image: "https://i.ibb.co/Wb8ySyn/image.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Decorative Diyas-1pcs
• Assorted Chocolates-10pcs
• Jar of Crunchy Nuts
• Rich Cookies
• Lotus Flower Wall Hanging-2pcs
• Custom Note card`
  },
  {
    id: "The Excelare",
    name: "The Excelare",
    image: "https://i.ibb.co/KjXRLG5v/The-Excelcare.png",
    price: 1499,
    originalPrice: 1699,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Brass Diyas-2pcs
• Assorted Chocolates
• Poutpuri
• Besan Laddu & Chocolates-250gms
• Custom Note card`
  },
  {
    id: "The Festival of Flavours Box",
    name: "The Festival of Flavours Box",
    image: "https://i.ibb.co/jk5g0MQf/The-Festival-of-flovour-Box.png",
    price: 1199,
    originalPrice: 1399,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates
• Poutpuri
• cashews with jute pouch
• Almonds with jute pouch
• Custom Note card
• Lotus Flower Wall hanging`
  },
  {
    id: "The Tyohaar Treat",
    name: "The Tyohaar Treat",
    image: "https://i.ibb.co/twwrChs6/The-Tyohaar-Treet.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates
• Choco Chips-8pcs
• Nuts with jute pouch
• Glass Bottle with jute pouch
• Custom Note card
• Lotus Flower Wall hanging`
  },
  {
    id: "The Nutty Affair",
    name: "The Nutty Affair",
    image: "https://i.ibb.co/zhN37V7s/The-Nutty-Affair.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Cashews
• Jar of Assorted Chocolates
• Jar of Raisins
• Rich Cookies
• Diya & Jyoti
• Custom Note card`
  },
  {
    id: "The Global Tech",
    name: "The Global Tech",
    image: "https://i.ibb.co/gM0qwzp8/Global-Tech.png",
    price: 1299,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jute bag of Cashews
• Jute bag of Pistachio
• Jute bag of Almonds
• Assorted Chocolates- 6pcs
• Choco Chips Cookies-8pcs
• Teracotta Diya - 2pcs
• Custom Note card`
  },
  {
    id: "Kongsberg",
    name: "Kongsberg",
    image: "https://i.ibb.co/5xMTzLDP/Koonsberg.png",
    price: 1199,
    originalPrice: 1399,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jute bag of Almonds
• Jute bag of Cashews
• Phool Dhoop
• Wooden Block Diya
• Lotus Flower Wall hanging-2pcs
• Flower wax candles
• Custom Note card`
  },
  {
    id: "A Sweet Diwali",
    name: "A Sweet Diwali",
    image: "https://i.ibb.co/k6zDkSFX/A-sweet-Diwali.png",
    price: 1399,
    originalPrice: 1599,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Cashews
• Jar of Pistachio
• Jar of Almonds
• Jar of Raisins
• Assorted Chocolates- 15pcs
• Custom Note card`
  },
  {
    id: "The Festive Edit",
    name: "The Festive Edit",
    image: "https://i.ibb.co/PGYZW02d/The-Festive-Edit.png",
    price: 1199,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Crunchy Nuts
• Copper Bottle - 500ml
• Besan Laddu-50gms
• Lotus Flower Wall hanging - 2pcs
• Decorative Diya / Scented Candle`
  },
  {
    id: "Homelane",
    name: "Homelane",
    image: "https://i.ibb.co/wNFNPvR1/Homelane.png",
    price: 920,
    originalPrice: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Terracotta Diya - 2pcs
• Jute bag of Almonds
• Besan Laddu-50gms
• Lotus Flower Wall hanging - 2pcs
• Assorted Chocolates- 6pcs
• Decorative Diya / Scented Candle`
  },
  {
    id: "The Flavour & Fastivity",
    name: "The Flavour & Fastivity",
    image: "https://i.ibb.co/rGMYJ7PS/The-Flavour-Fastive.jpg",
    price: 899,
    originalPrice: 1299,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Crunchy nuts
• Golden Candle holder
• Besan Laddu-50gms
• Lotus Flower Wall hanging - 2pcs
• Assorted Chocolates
• Custom Note Card
• Decorative Diya / Scented Candle`
  },
  {
    id: "Diwali Dhamaka",
    name: "Diwali Dhamaka",
    image: "https://i.ibb.co/d4bDLG6r/diwali-dham-AKA.webp",
    price: 879,
    originalPrice: 1199,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Phool Dhoop
• A Metal Diya Holder
• Lotus Flower Wall hanging - 2pcs
• Assorted Dry Fruits- 3 jars
• Custom Note Card`
  },
  {
    id: "The Scrumptious Munch box",
    name: "The Scrumptious Munch box",
    image: "https://i.ibb.co/G4fhN6bW/scumtions-munch-box.png",
    price: 1399,
    originalPrice: 1799,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Golden Candle Holder
• Assorted Chocolates-6pcs
• Choco Chips-8pcs
• Poutpuri
• cashews with jute pouch
• Almonds with jute pouch
• Pistachios with jute pouch
• Raisins with jute pouch
• Custom Note card
• Decorated Diya/Scented Candles`
  },
  {
    id: "The Gratitude Box",
    name: "The Gratitude Box",
    image: "https://i.ibb.co/Y4cqhgTC/DSC09388-800x.webp",
    price: 849,
    originalPrice: 1100,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• A jute Pouch of Crunchy Nuts
• Rich Cookies
• Crispy Waffles Chips
• Scented Candles
• Custom Note Card
• Lotus Flower Wall Hanging- 2pcs`
  },
  {
    id: "Dil of Diwali",
    name: "Dil of Diwali",
    image: "https://i.ibb.co/VWb47wKK/Dil-of-Diwali.png",
    price: 699,
    originalPrice: 879,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• A jute Pouch of Crunchy Nuts
• Cookies- 6pcs
• Cashews - 50gms
• Raisins - 50gms
• Assorted Chocolates -
• Custom Note Card
• Lotus Flower Wall Hanging- 2pcs`
  },
  {
    id: "Diwali Snacks Box",
    name: "Diwali Snacks Box",
    image: "https://i.ibb.co/j96XMCBP/The-Diwali-Snacks-Box.png",
    price: 599,
    originalPrice: 679,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `• Top & Bottom Luxury Box
• Jar of Cashews
• Jar of Almonds
• Jar of Raisins
• Jar of Pistachios
• Custom Note Card`
  },
  {
    id: "Rigid Boxes 1",
    name: "Customise Your Box",
    image: "https://i.ibb.co/x8fPg8RZ/IMG-20251002-WA0008.jpg",
    price: 450,
    originalPrice: 800,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`
  },
  {
    id: "Rigid Boxes 2",
    name: "Customise Your Box",
    image: "https://i.ibb.co/hRqF14C5/IMG-20251002-WA0010.jpg",
    price: 80,
    originalPrice: 100,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`
  },
  {
    id: "Rigid Boxes 3",
    name: "Customise Your Box",
    image: "https://i.ibb.co/k2Y01SHj/IMG-20251002-WA0011.jpg",
    price: 300,
    originalPrice: 400,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`
  },
  {
    id: "Rigid Boxes 4",
    name: "Customise Your Box",
    image: "https://i.ibb.co/cKwb0CWs/IMG-20251002-WA0012.jpg",
    price: 400,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts",
    description: `We Can Customise it As Per Your Need`
  },
  {
    id: "Round Dry Fruits Chocolates",
    name: "Round Dry Fruits Chocolates -350gms",
    image: "https://i.ibb.co/yB6YLDNs/IMG-20251001-WA0030.jpg",
    price: 599,
    originalPrice: 899,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Chocolate Bar",
    name: "Chocolate Bar-350gms (pack of 2)",
    image: "https://i.ibb.co/HLrJbGDP/Chocolate-bar.jpg",
    price: 350,
    originalPrice: 420,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Exotic Chocolate Bar",
    name: "Exotic Chocolate Bar",
    image: "https://i.ibb.co/TqKJYTXF/Exorctic-Chocolate-Bar.jpg",
    price: 499,
    originalPrice: 599,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Premium Homemaid Chocolates",
    name: "Premium Homemaid Chocolates-24 pcs",
    image: "https://i.ibb.co/RG040vbb/Premium-Homemaid-Chocolates.jpg",
    price: 399,
    originalPrice: 499,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Exotic Dark Center Chocolates",
    name: "Exotic Dark Center Chocolates - 100gms",
    image: "https://i.ibb.co/n870rkt6/IMG-20251001-WA0028.jpg",
    price: 150,
    originalPrice: 180,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Premium Shape Chocolates",
    name: "Premium Shape Chocolates -30pcs",
    image: "https://i.ibb.co/sp7krjYr/IMG-20251001-WA0026.jpg",
    price: 500,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Heart Shape Chocolates",
    name: "Heart Shape Chocolates with Cute Notes- 24pcs",
    image: "https://i.ibb.co/pBgLqmLq/IMG-20251001-WA0022.jpg",
    price: 500,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Diwali Crackers Chocolates",
    name: "Diwali Crackers Chocolates- 10pcs",
    image: "https://i.ibb.co/TBS5rBCP/Crackers-Chocklates.jpg",
    price: 300,
    originalPrice: 600,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Festival Diwali Box 1",
    name: "Festival Diwali Box with Crackers Design & Sweets",
    image: "https://i.ibb.co/sJ1YC31x/IMG-20251001-WA0019.jpg",
    price: 1199,
    originalPrice: 1499,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  },
  {
    id: "Festival Diwali Box 2",
    name: "Festival Diwali Box with Crackers Design,Chocolates, roasted Almonds and Joy",
    image: "https://i.ibb.co/ccFsKPpR/A-Full-Box-of-Handmade-Chocolates.jpg",
    price: 2499,
    originalPrice: 3099,
    category: "festival-gifts",
    subCategory: "diwali-gifts"
  }

  // === CHARITY ITEMS END ===
];

export const topPicks: Product[] = products.slice(0, 8);

export function getById(id: string) {
  if (!id) return undefined;
  const normalized = decodeURIComponent(String(id)).trim().toLowerCase();
  return products.find((p) => String(p.id).trim().toLowerCase() === normalized);
}

export function listByCategory(cat?: string) {
  if (!cat) return products;
  return products.filter((p) => p.category === cat);
}

export function searchProducts(q: string) {
  const s = q.toLowerCase();
  return products.filter((p) => p.name.toLowerCase().includes(s));
}
