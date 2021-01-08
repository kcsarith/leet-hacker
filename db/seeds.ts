import { SecurePassword } from "blitz"
import db from "./index"

/*
 * This seed function is executed when you run `blitz db seed`.
 *
 * Probably you want to use a library like https://chancejs.com
 * or https://github.com/Marak/Faker.js to easily generate
 * realistic data.
 */

const seed = async () => {
  const hackPadSeedData = [
    {
      name: "Mandatory methodical software",
      textField: "5c2502458a2d6b06498b2979cecbcadf95e8afd26e0d7dc8aafef9662213aa29",
      source: "Transgender",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: "https://pbs.twimg.com/media/E3ZF0I3XoAMa2r1.jpg",
    },
    {
      name: "Persevering zero defect budgetary management",
      textField: "8731a42d060344ef52e9119c5c05bb6d86addded7b49ce24d3911dc60ebb33cf",
      source: "Cisgender Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: "",
    },
    {
      name: "Streamlined explicit policy",
      textField: "a63e5eb215a9a54171344be97cab28ed53d669685f5b528256d0044bc9df94a6",
      source: "Transsexual Person",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Polarised value-added application",
      textField: "1c211c5087f2fcb78b5cc7bb316bc560f4521581af13225414cc07d94bf9f6fd",
      source: "Transgender Woman",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://www.ecolab.com/-/media/Ecolab/Ecolab-Home/Images/Programs/Pest/RodentsPestSolutions_edited1.jpg?h=310&iar=0&w=550&sc_lang=en&hash=BD6F3120F6F47401162D23C5B80A9FB9",
    },
    {
      name: "Reverse-engineered multi-tasking capability",
      textField: "3d1a7be4b5824ad748492e59439ed3226e39c4bd27ea3e1dc5d35be73f907416",
      source: "Gender Nonconforming",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Robust impactful approach",
      textField: "09fe90c64fac22d2bc7484355249276f407dfa0c5f288e1439f095c102b9f80e",
      source: "Gender Fluid",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
    },
    {
      name: "Networked bandwidth-monitored matrix",
      textField: "9e22b234ba4daaced54ced4d3b9e75cc649fcc9f957688d9f8a3103daf9a90b7",
      source: "Gender Fluid",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Progressive background superstructure",
      textField: "57c5a5a368ebb68333b85a6d8c08a4e110734e8647d6f2d0dfe89c3562a1cfc2",
      source: "Gender Fluid",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1489533119213-66a5cd877091?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    },
    {
      name: "Reverse-engineered multi-state orchestration",
      textField: "15dcf2667ff9089a3c9884d877b155e3937e2bc11dd3332c30cc5ca7c54735a2",
      source: "Transsexual",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Phased bi-directional portal",
      textField: "bbe32e41d80d2b6f5fb202b68fb1b66a70f735e1bef1e25769ca8cee0edf0fc0",
      source: "Non-binary",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Advanced context-sensitive policy",
      textField: "dc86a0fed0773475ba97d761f6bcf01a6ce21e943c622ccea3540d457f74dd23",
      source: "Pangender",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Enterprise-wide value-added migration",
      textField: "f38313679a580e120a88770a835b30a9dc0adf2622144745b5b1342d914d8d79",
      source: "Transgender",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1550686041-366ad85a1355?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Optimized leading edge access",
      textField: "a8f996dc2201631bec2c408c15526d3e13abd3146b6d454b24c6206f34af8789",
      source: "Other",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Adaptive attitude-oriented matrices",
      textField: "aa43b1004bf8de50cb444e7ca1b6610bac0618232ecd4a6a9e69bb0afc5d603a",
      source: "Trans Man",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1484100356142-db6ab6244067?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1262&q=80",
    },
    {
      name: "Inverse heuristic throughput",
      textField: "a0c5b68cf51baf035f6140d78abd79e77917d2fbdf6d808f855384e13ebac763",
      source: "Gender Variant",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Synergized uniform orchestration",
      textField: "0b40c6cfe2347259d34c57f4a0b5c51f4b44958cfa693660881d98da6e54512f",
      source: "Transsexual Woman",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1499854413229-6d1c92ff39ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80",
    },
    {
      name: "Profit-focused human-resource strategy",
      textField: "b69a95649caa25c488a3fbf7b4b8f7fa59969aeb524f4cf95ba1fea970affe60",
      source: "Intersex",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1554570731-63bcddda4dcd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80",
    },
    {
      name: "Customer-focused coherent task-force",
      textField: "a3a95883c009439d6f2f506f84409db5ad1afcd29459e2f2ddafa63c914f8880",
      source: "Bigender",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Programmable dedicated data-warehouse",
      textField: "06c080ed408eec2bc78b70a90355a71f46a3dd5a8aff31d5d520f16d1b70ed15",
      source: "Neither",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Optional 6th generation system engine",
      textField: "e064f31cdf4eb4e7254867633844826cdf6958335dce4a08fefb271e86469de0",
      source: "Cis Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Reduced coherent instruction set",
      textField: "8ad45bb699dc619ce8f5f619aa1ef703d0b2923ca6527db78950a65ff179825b",
      source: "Transmasculine",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Horizontal high-level process improvement",
      textField: "71e7efd9f8439e51776322dd56494e17428572d22f6801c41e1a509d56fb1c40",
      source: "Cis",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626553550517-4eeebf498d2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1MzYyNw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Multi-layered methodical encryption",
      textField: "44f4a5f2550ba31abf49fcbdf959dbfce7e41ba9e3bd6a382c5159e2ac1b4de1",
      source: "Trans Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Optional multimedia database",
      textField: "0f53ea4d1c6b651be922d17c5f95fb371d745f38ef04c80e1002a8fd27702391",
      source: "Transgender Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Total systemic project",
      textField: "551a7e20dc53d1369c172948666efed298d5304d7eda1e42fc5634e90cc2c316",
      source: "Cis Man",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1624705691613-57a22a3d57ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc3Mw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Diverse user-facing product",
      textField: "7b74b52bb217615e8c52b05bcecd19746ad58fd2d9713cc3db9967e040de86dc",
      source: "Transsexual Man",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Focused contextually-based orchestration",
      textField: "5b4f68b1a66e3240b2c97a63fea07d76510d8f3241029183dbb41ea7f649e306",
      source: "Gender Fluid",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1627087432512-950a1c1918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc3OA&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Reverse-engineered dynamic focus group",
      textField: "8ade6e1a6cd4d996f0a1e20c8f451e527fa52423ed766d4642fded47f7870a85",
      source: "Transfeminine",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626802492625-0aab2a1581e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc3OQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Programmable next generation model",
      textField: "ae1454f992763099b317cd292bbb92840ff11cb6725a27aa735b6c78d6e3f54d",
      source: "Cisgender Man",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Mandatory scalable approach",
      textField: "3fde964f51cbbb4cd032bb318634cd066178030cf1adb1e13d471756c9eb6812",
      source: "Transsexual Person",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1501426026826-31c667bdf23d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80",
    },
    {
      name: "Integrated tertiary analyzer",
      textField: "80fe6a0c824ded834c3b127662e2cf42e00689093d2fab371c16578993807c80",
      source: "Trans Man",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Secured transitional orchestration",
      textField: "e0abaaffd66f7a68119d072817c0fee7308a403118ada590c8bd8f1396409d06",
      source: "Cis Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1625003809203-47315aef0915?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc3Nw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Pre-emptive eco-centric moratorium",
      textField: "131758f9db67f2ae2112be664e9e4c4ec37dad8c5e804b14a86c95657e044387",
      source: "Androgynous",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Vision-oriented interactive task-force",
      textField: "14d3ff6a2c5af9805f41297c1bcd807f2d523d89a53724e9930644a1e4c41500",
      source: "Cis Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1624413090824-5624335f5383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1MzcxMQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Reverse-engineered intangible product",
      textField: "b4d496f1b196869e611cfb50c0e5231bcf4781336e81d07ebf3f146d268312fc",
      source: "Androgyne",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Innovative next generation collaboration",
      textField: "de64ff6c17057e9a670b80811473478874d9fc551b6c28202cef032cef74cde0",
      source: "Transgender Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626179132559-87f568cc4130?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc5Mw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Public-key multimedia throughput",
      textField: "8629788e0a06f74b5684717e6419f7cdd0d4a51a58180d2fc6aea146523dd78f",
      source: "Transsexual Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Exclusive bifurcated encoding",
      textField: "451f95b86cb8ea4073388cd933d24accb6bdcf6d0a3404e65191ae64c2549819",
      source: "Female to Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626159129266-e5bc98531d9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc5Ng&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Monitored dedicated local area network",
      textField: "1e24b529524dee9d71d6ed412f431454bd2249b131218c4627804c77e5830961",
      source: "Transsexual Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Upgradable 5th generation flexibility",
      textField: "752066d03c19028e89cf085a18aaf434f8035707123c2b8b015c5f2ac04e7a5c",
      source: "Cisgender Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Progressive logistical budgetary management",
      textField: "5d77efb003c0e1e481f99b651874c15671dc588764302675b15b331dfec6bc7d",
      source: "Cisgender Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://woodgreen.org.uk/image/image/image/V8Iw3SL87ubcIekoP1DmmhekPFXPNbBL5yB4JpVR.jpeg?w=800&h=422&fit=crop-center",
    },
    {
      name: "Enterprise-wide needs-based artificial intelligence",
      textField: "140be4735772464891ebaf3783f52cb442766846cc5c866d6d4e517efa402675",
      source: "Trans",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Horizontal client-driven Graphical User Interface",
      textField: "2ce2ca554856a48156dc81a744ae9c6f0371eef7128318ca5bd74d311c381d4e",
      source: "Transsexual Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Down-sized heuristic access",
      textField: "62f0aab628fe093829774551691f59de82e361a144784a18e98445371ee1bf7e",
      source: "Pangender",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626050954744-92bf034ce476?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc4Mw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Exclusive background system engine",
      textField: "1893b60e0edfe82b7506bcf74a4bb2c8579027cc73238de140b36f9d0939536f",
      source: "Bigender",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Monitored solution-oriented architecture",
      textField: "5d788f14fb3cef19b2405b1dde9b741de34482357ab4840153f7a0cba0c3d32a",
      source: "Transsexual",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://assets2.rockpapershotgun.com/phantasy-star-online-2-new-genesis-a.jpg/BROK/resize/1920x1920%3E/format/jpg/quality/80/phantasy-star-online-2-new-genesis-a.jpg",
    },
    {
      name: "Balanced directional secured line",
      textField: "184812dfc882a1fe618c9cebc2f5a7f5096c0799a608121211c33111eb5057be",
      source: "Cis",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Object-based impactful workforce",
      textField: "fa320588459c9f36744f4005433bcece24578f425012939916a5b46d6f15ed60",
      source: "Transgender Man",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Multi-layered uniform forecast",
      textField: "f49361c42ad48565ca95303ad22c8392d8508fb0e22fe0a06f3585b01a06fea2",
      source: "Cis Female",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1624807417716-bf3c4fdf6670?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc4NQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Ameliorated background moratorium",
      textField: "45a8bbc8353856d8c35cdab0c6971f2b2238feaa73898ac80a5a7ad55cb2767f",
      source: "Non-binary",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Intuitive solution-oriented leverage",
      textField: "442a5d66d86822aabcc925f417f64d5038a7573dbe05d04c21a839ac0c0915d0",
      source: "Two-Spirit",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Advanced encompassing superstructure",
      textField: "3126e20d74606737b17ac29cf3e5db0f491220cc34d057e5ead77a7ebee9e905",
      source: "Cis",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=641&q=80",
    },
    {
      name: "Multi-tiered even-keeled capacity",
      textField: "a0030022e988ca85e033bbfd9914acb726c42a9bbf5f7a404039fef01d6aa70d",
      source: "Transsexual",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Synergistic reciprocal flexibility",
      textField: "a606b24e41267b98fff13573c224932cbf77f181839e2b843e189fe710bd3955",
      source: "Transsexual Woman",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626160200858-0579929f1d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc4Nw&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Up-sized local alliance",
      textField: "a65418d9d60edde6d6e70693fbf61bd588a3cd0809c0b37424c21c9abda3a0d8",
      source: "Intersex",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Pre-emptive eco-centric capability",
      textField: "3dd5dbca7aa7e2a950efa8e7debf4bf051d1a76bab0f22d13893e0c2915e6701",
      source: "Transsexual",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
    },
    {
      name: "Progressive motivating matrix",
      textField: "e600607ec7e18afba9a8cc5d1e75590137824119f7b0b0427f6e518b0ab6f72a",
      source: "Transmasculine",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Digitized well-modulated toolset",
      textField: "c278497be6fbe5b960475b26355c8c09807badf7fdaa3e014bf4a702624ea765",
      source: "Androgyne",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80",
    },
    {
      name: "Organic system-worthy access",
      textField: "0767adfda788ed3a34525a30f448b83eaf107269a01dd4a756640824bd98ddd5",
      source: "Two-Spirit",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "De-engineered high-level conglomeration",
      textField: "edde23f81aaebf1a44e4ffe718ee9d9c3e330c328ac834f988039ad93b316a3a",
      source: "Pangender",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    },
    {
      name: "Focused dedicated throughput",
      textField: "7e5b3d69a49a51db451abd1325e6a038dd82761bed83a51de71d1c44ed879c13",
      source: "Androgyne",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Reduced fresh-thinking Graphical User Interface",
      textField: "c86d127468461845f4ccfdd28f328d5160a9de4eefc568de06cfd998ecbe69bc",
      source: "MTF",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1627087432512-950a1c1918f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc3MQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Polarised actuating projection",
      textField: "362289921d67f76a02dacf0a43c02bfe38c2cb72412df59f0a556c7c58e169f5",
      source: "Transgender Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Down-sized 4th generation conglomeration",
      textField: "2fc789298ddc047754c5228fe66eaa493a14b5613c5075fd727c4e1c8b41e88b",
      source: "Transsexual Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Up-sized local flexibility",
      textField: "59b4f8df0e74d7a963b70375b8ff2eaa27f71bddc3861d8d2dc5dbcb3769a056",
      source: "Cis Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1409&q=80",
    },
    {
      name: "Inverse regional hardware",
      textField: "c4c3288bd5ad1eb66110153b8ea4e38e1eb52b68940db2ee3ab533dcd963ea43",
      source: "Transsexual Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Synergized homogeneous contingency",
      textField: "76da8dc5569e73961416b36555f2c924363d23872881a80f6e5167ef875581e9",
      source: "Cis Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Grass-roots optimizing info-mediaries",
      textField: "a28e14054c723cea25308003fc63d7c954a146597b068a6dcc9beb394aa8d7bf",
      source: "Transsexual Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626939078937-25275d079efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc5Mg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Stand-alone local flexibility",
      textField: "5d84a048f21695f3e74d99d7a5bc8a76006e08c5fb6ac177e367a191e99cf35e",
      source: "Cisgender Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Fundamental encompassing paradigm",
      textField: "6903424b1aa81635cda7786d3642ec998daa305206c741ed7181a91e7c4c65d3",
      source: "Cisgender Female",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1625194503582-c1e99a5328c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc5NQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Programmable transitional moderator",
      textField: "a85a552ddd4d9d0b216c42031bc8d3ed90e2fd899224deab4b0e00fdfa00e49c",
      source: "Agender",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Devolved mobile extranet",
      textField: "d86271049799625cbbd69bd9f7f0deef7cf2a7134b4c2376c058881813443c07",
      source: "Transsexual Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Reactive 5th generation matrices",
      textField: "181ae0c52a83ddc1c09cb93c7ad6c3f66661f27462bbed06851271f948a57b4c",
      source: "Transsexual Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Re-contextualized interactive matrices",
      textField: "e260dbd3f6fb023d21d5fb91695e337c2daa612647bc572b4ed6ff98ed521936",
      source: "Cis Woman",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "http://dummyimage.com/176x693.png/dddddd/000000https://images.unsplash.com/photo-1626961641406-93644d8113e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1MzgwNQ&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Universal high-level concept",
      textField: "67b40f139ac3e8997456123121f903bf54a54b7169e63ad57038d0057cd2414a",
      source: "Transsexual Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "De-engineered dynamic open system",
      textField: "800a304f650afb09926e4b1565f567857328aa0ff35f4a2db17806284f4f4662",
      source: "Gender Nonconforming",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    },
    {
      name: "Centralized systemic definition",
      textField: "89a5d9bf62f91401997eb0fe4e565dca724a571e89729427dad1849e5c4b04e9",
      source: "Trans Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Grass-roots optimizing time-frame",
      textField: "7c73580c9230ecfc51a6bf74ba8bd3a9451930468c45b00c94225939886aae64",
      source: "Bigender",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Devolved demand-driven function",
      textField: "3d22c4da8bed6f6c908de5d23ca5f88c41ba11b950936e963771de5817a3442c",
      source: "Transsexual",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1624891524202-b6edca42c92e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc5MA&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Cross-platform clear-thinking service-desk",
      textField: "9fd157b9d9c6dfab2702cae0749df334f1b02ccf94b9414fe0dd8a9aead9bc77",
      source: "MTF",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Managed dynamic secured line",
      textField: "5a5eb9b0542f3aef2a753f9594dc654190f4b50b24331f81ca6dd4ea53a860cc",
      source: "Non-binary",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1625188793508-16976f2cafe1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc5OA&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Devolved zero tolerance solution",
      textField: "02957e823549c3f68b00a0e20a6b6803cc9bf33fea3fcafa26ebcaeab9b24252",
      source: "Transgender Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "User-friendly client-driven project",
      textField: "9f533e97573f5ccbf0ea5d9dcad060d03528a921768e91451bc92335b7cec650",
      source: "Intersex",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Secured local pricing structure",
      textField: "6c946d8069c5358a358373c91f89a66d25ec4c3ff094020a9490b73c9dbe73b6",
      source: "Transgender",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1625579547144-5617855610da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1MzgwMg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Assimilated composite alliance",
      textField: "38bb9f3ab4b7ac25bcd4514a83e78235ecd5242535653540dfa99a95a875bf07",
      source: "Non-binary",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Cross-platform hybrid attitude",
      textField: "4d1c9d8465ae83f33a3af4f3b99b947411b08149a60c87c948d29a87c526cd17",
      source: "Cis",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1625631242397-257a8e575662?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc4OA&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Quality-focused impactful portal",
      textField: "139bc5530d33c8f15806fb068430a94ee1eef561f557dab2abc94ec8cb604ad3",
      source: "Transsexual Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Expanded dynamic algorithm",
      textField: "7e7558fc2b5b1438efc595b70b2a6ee1f748475fce51bdb50bc91ba03500558b",
      source: "Bigender",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Synergized transitional support",
      textField: "7c004a49a3ea39bbb83485b7f9232adbc0b02c08897bba5dc06db198107790c5",
      source: "Two-Spirit",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Switchable content-based throughput",
      textField: "0e3b51adc9d13970b6d319b2528e0094b86ddde5c667c7556a5cec6a54ac97f6",
      source: "Transgender Woman",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Advanced high-level challenge",
      textField: "0c86f5728e7fe90fb6aa0c14e4a409bb5440a51d412ee41388fff937ac95ff91",
      source: "Cis Female",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1485550409059-9afb054cada4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2002&q=80",
    },
    {
      name: "Reactive multimedia portal",
      textField: "4ebe927b9d6bcbb41b8d6b5412622ca120bf73cad5a89d92088f48c0bab2eec3",
      source: "Transsexual Female",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc: null,
    },
    {
      name: "Decentralized even-keeled open architecture",
      textField: "87f876b8fe282ad4a657d9981307b90b48bfa03adc4b56e47a9909d397d2d92c",
      source: "Cisgender Male",
      applyStyling: "true",
      includeSpaces: "true",
      backgroundSrc:
        "https://images.unsplash.com/photo-1627201301069-35092f26917c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1MzgwMA&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Stand-alone real-time algorithm",
      textField: "c50a69b1a4e377a7f14f3051b708ef6969fa131182363ecd186e2b0ede0cafb7",
      source: "Transgender Person",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Synchronised dynamic portal",
      textField: "09250f295ea4bd647d3b9e766875d721c0e3bbeb4a1499f1af81d777282861c2",
      source: "Gender Questioning",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Stand-alone intangible synergy",
      textField: "69ddf2ff09b6c42d7aafdb86e361325fbcdcca28a551ddb2ad1764032654dcb6",
      source: "Transsexual Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626975506730-b9061b7d3b5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1Mzc4Mg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Configurable 3rd generation leverage",
      textField: "0b77f954b0f05b28c0516c4d3ded8c84add4ab11f0e332540ce54ab1e30d0274",
      source: "Gender Fluid",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Ameliorated hybrid secured line",
      textField: "a2245c6c25c3c4241c3934325de9259a475d7830bcc1219585fb3dfc6c8bfcb5",
      source: "Male to Female",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
    {
      name: "Synergized full-range frame",
      textField: "c620b1ae74d48aee591206a4a4a1d0eb76407b79aa84dcedb087f0348d0b320a",
      source: "Other",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc:
        "https://images.unsplash.com/photo-1626196607732-eb69a05ac32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNzM1MzgwNg&ixlib=rb-1.2.1&q=80&w=1080",
    },
    {
      name: "Upgradable analyzing focus group",
      textField: "8fdef6477b12548f44419ec386f25e3610df0f6658e9e53086e55724957b81db",
      source: "Female to Male",
      applyStyling: "true",
      includeSpaces: "false",
      backgroundSrc: null,
    },
  ]

  // await db.user.create({
  //   data: {
  //     name: "demolitionman",
  //     email: "demolition@demo.com",
  //     hashedPassword: await SecurePassword.hash("demolitionman".trim()),
  //   },
  // })
  // await db.user.create({
  //   data: {
  //     name: "kcsarith",
  //     email: "kcsarith@gmail.com",
  //     hashedPassword: await SecurePassword.hash("Rishit@6".trim()),
  //   },
  // })
  await db.user.create({
    data: {
      name: "Matoi",
      email: "matoi@gmail.com",
      hashedPassword: await SecurePassword.hash("password".trim()),
    },
  })
  await db.user.create({
    data: {
      name: "Harriet Cuent",
      email: "harriet@gmail.com",
      hashedPassword: await SecurePassword.hash("password".trim()),
    },
  })
  await db.user.create({
    data: {
      name: "Hitsugi Yasaka",
      email: "hitsugi@gmail.com",
      hashedPassword: await SecurePassword.hash("password".trim()),
    },
  })
  await db.user.create({
    data: {
      name: "Silva Real",
      email: "silva@gmail.com",
      hashedPassword: await SecurePassword.hash("password".trim()),
    },
  })
  await db.user.create({
    data: {
      name: "Aika",
      email: "aika@gmail.com",
      hashedPassword: await SecurePassword.hash("password".trim()),
    },
  })

  for (let i = 0; i < hackPadSeedData.length; i++) {
    const hackPad = hackPadSeedData[i]
    await db.hackPad.create({
      data: {
        name: hackPad?.name,
        textField: hackPad?.textField,
        source: hackPad?.source,
        applyStyling: hackPad?.applyStyling,
        includeSpaces: hackPad?.includeSpaces,
        backgroundSrc: hackPad?.backgroundSrc,
      },
    })
  }
}

export default seed
