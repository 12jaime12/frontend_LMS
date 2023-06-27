import React from 'react'

const Locations = ({provincia, setLocation}) => {
  console.log(provincia);
  let prov = provincia.toLowerCase()
  console.log("provvvv", prov)
  switch(prov){
    case prov.includes("coruña"):
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27004.64076770659!2d-8.418367827130911!3d43.3630445575869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2e7cfcf174574d%3A0x6a47350d095cdfee!2zQSBDb3J1w7FhLCBMYSBDb3J1w7Fh!5e0!3m2!1ses!2ses!4v1687869965036!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>)
      ;
    case "ourense":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23593.56187359089!2d-7.8842851889013055!3d42.33836075643962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2ffeb5bc5378eb%3A0x295326a374bca39c!2sOurense!5e0!3m2!1ses!2ses!4v1687872630932!5m2!1ses!2ses" width="300" height="250" loading="lazy"></iframe>
      )
      ;
    case "pontevedra":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47115.41482679404!2d-8.717285958412594!3d42.43383440041676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2f71cf339da6d7%3A0x6d5b163a1be431d4!2sPontevedra!5e0!3m2!1ses!2ses!4v1687870702443!5m2!1ses!2ses" width="300" height="250"   loading="lazy" ></iframe>
      )
      ;
    case "lugo":
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46678.1650416261!2d-7.597699714733056!3d43.012276261479364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd31ce80b130876d%3A0x1f305fbf2867050c!2sLugo!5e0!3m2!1ses!2ses!4v1687870728946!5m2!1ses!2ses" width="300" height="250"   loading="lazy" ></iframe>
      ;
    case "asturias":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1487492.422840692!2d-7.16575758692501!3d43.266957084959145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd368cfa609eb09d%3A0xf8b5f32b7dc69e3a!2sPrincipado%20de%20Asturias%2C%20Asturias!5e0!3m2!1ses!2ses!4v1687870770171!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "cantabria":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745368.9943407247!2d-4.660115353966055!3d43.13397811657119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4920db090ebfcb%3A0x104f58273c9c8d0!2sCantabria!5e0!3m2!1ses!2ses!4v1687870788422!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "vizcaya":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372165.41436779744!2d-3.26058536228454!3d43.21908846715866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e4e06a15410cf%3A0x304f58273c9cc30!2sVizcaya!5e0!3m2!1ses!2ses!4v1687870811347!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case ("guipuzcoa" || "guipuzkoa"):
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d372616.6841658442!2d-2.495659237859647!3d43.14510459458238!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5035381ce4c9cd%3A0x304f58273c9ca70!2sGipuzkoa!5e0!3m2!1ses!2ses!4v1687870863105!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "alava":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d748909.2637677195!2d-3.419128551682327!3d42.84272021184601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4fc01662943233%3A0x304f58273c9c940!2zw4FsYXZh!5e0!3m2!1ses!2ses!4v1687870879843!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "navarra":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1503571.4858837693!2d-2.9312860090788218!3d42.604891837403486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5092f797c95685%3A0x1dab19b7d77c8a0e!2sNavarra!5e0!3m2!1ses!2ses!4v1687870903364!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "huesca":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23669.376028869527!2d-0.4264479896252336!3d42.13590450769946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd584449d1d84db5%3A0x2c8dfd864aa74791!2sHuesca!5e0!3m2!1ses!2ses!4v1687871094554!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "zaragoza":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47699.005057773116!2d-0.9361805343551192!3d41.65168389418127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5914dd5e618e91%3A0x49df13f1158489a8!2sZaragoza!5e0!3m2!1ses!2ses!4v1687871117297!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "teruel":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24327.040060813084!2d-1.1215644459057474!3d40.345007772842216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5e73abeff0fd43%3A0x29412a3ac541cf0!2sTeruel!5e0!3m2!1ses!2ses!4v1687871140737!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "lleida":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23861.843499660412!2d0.5993352585368656!3d41.618340461338306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a6e048e73bd37f%3A0xa0d32ea2d259aaaf!2zTGxlaWRhLCBMw6lyaWRh!5e0!3m2!1ses!2ses!4v1687871157260!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "girona":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47454.88453194889!2d2.7774675703377314!3d41.980306584759866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bae72798c8fdab%3A0xaf3845b6a5296a6f!2sGirona!5e0!3m2!1ses!2ses!4v1687871173018!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "tarragona":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48086.39684071915!2d1.1973838081971946!3d41.12579746127137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3fcdbd3ddf159%3A0x920569a71387a3b2!2sTarragona!5e0!3m2!1ses!2ses!4v1687871190317!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "barcelona":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.66762261865!2d2.0577880130703297!3d41.392638557859996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona!5e0!3m2!1ses!2ses!4v1687871208194!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "leon":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23493.79019298446!2d-5.597990887948642!3d42.60360380492838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd379a9a0d5e1bd9%3A0x7d849ffad4f1eef3!2zTGXDs24!5e0!3m2!1ses!2ses!4v1687871236337!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "palencia":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23716.81681554629!2d-4.547553440078245!3d42.00881425853733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47b1c905911a11%3A0x99b988742379a0dd!2sPalencia!5e0!3m2!1ses!2ses!4v1687871257225!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "burgos":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47182.80280280078!2d-3.735892674432267!3d42.34411862546004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd45fcbe3dc20327%3A0xa1f5beab8e71aa1!2sBurgos!5e0!3m2!1ses!2ses!4v1687871271706!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case prov.includes("rioja"):
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d755697.1624697628!2d-3.065890392811475!3d42.279760566336066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd454b924ef7dcbb%3A0x787ffa5ea69b298e!2sLa%20Rioja!5e0!3m2!1ses!2ses!4v1687871290194!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "soria":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23806.715431987286!2d-2.4951786409367425!3d41.76711966023077!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd44d2d276bb20d7%3A0x8b75eca5a72ee4a5!2sSoria!5e0!3m2!1ses!2ses!4v1687871322018!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "zamora":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23904.17234308513!2d-5.765135641867345!3d41.50380796222469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd391e3bc094f817%3A0x3fb3a56a82306b25!2sZamora!5e0!3m2!1ses!2ses!4v1687871337010!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>)
      ;
    case "valladolid":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190643.54791179503!2d-4.973621418356462!3d41.70313571669075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd47728c08c66e93%3A0xb3ff92d41ca26bef!2sValladolid!5e0!3m2!1ses!2ses!4v1687871354044!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "segovia":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24110.692763414503!2d-4.1328014938395725!3d40.9412483170046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd413ee6a93332f9%3A0x54567221bf13dfb7!2sSegovia!5e0!3m2!1ses!2ses!4v1687871367914!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "salamanca":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24102.591131885387!2d-5.689811693762198!3d40.96343666680267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3f265dc7dd7c45%3A0x2f7ae4d00bbfa9aa!2sSalamanca!5e0!3m2!1ses!2ses!4v1687871388181!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "avila":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24214.20205618766!2d-4.702793294828088!3d40.65688426968984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd40f31b5bf84b6b%3A0xc0f6450ab995ad4a!2zw4F2aWxh!5e0!3m2!1ses!2ses!4v1687871401307!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "madrid":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194348.23369322438!2d-3.8443462645304725!3d40.43783728195806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid!5e0!3m2!1ses!2ses!4v1687871426476!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "guadalajara":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24223.16333714516!2d-3.1937720949136894!3d40.63218831993155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd43ac63987ff53b%3A0x800a702e2c07492e!2sGuadalajara!5e0!3m2!1ses!2ses!4v1687871443012!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case prov.includes("ciudad"):
      return(
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24810.262295619927!2d-3.9475875505211118!3d38.9860419391005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6bdcb33d97174d%3A0xefaf23e8b1e79c2b!2sCiudad%20Real!5e0!3m2!1ses!2ses!4v1687871461107!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "cuenca":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24428.82020903356!2d-2.1686244968778214!3d40.061970275890545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5d6741369751c3%3A0x6e81ab6ed08cd292!2sCuenca!5e0!3m2!1ses!2ses!4v1687871482652!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "toledo":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49000.59613331576!2d-4.0406296093816!3d39.86220201243221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6a0bad0bb5fdf1%3A0xc67f5be86a75adfe!2sToledo!5e0!3m2!1ses!2ses!4v1687871496731!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "albacete":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24808.10479853855!2d-1.8811890005005107!3d38.992197389017626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd665fe2fb218d15%3A0x8269cd31d6186180!2sAlbacete!5e0!3m2!1ses!2ses!4v1687871511491!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "castellon":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24455.515895735603!2d-0.06866259713278715!3d39.98745762672267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd5ffe2bb82bc197%3A0xbf89204be1c64f49!2sCastell%C3%B3n%20de%20la%20Plana%2C%20Castell%C3%B3n!5e0!3m2!1ses!2ses!4v1687871525188!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "valencia":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197294.56470387953!2d-0.5263211502837859!3d39.40766898295441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd604f4cf0efb06f%3A0xb4a351011f7f1d39!2sValencia!5e0!3m2!1ses!2ses!4v1687871541508!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "alicante":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50057.8804624091!2d-0.5137238297171993!3d38.35783359181651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6235da3b9dab4b%3A0x1d7da872ac0b81e3!2sAlicante%20(Alacant)%2C%20Alicante!5e0!3m2!1ses!2ses!4v1687871557151!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "murcia":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50317.671684282046!2d-1.1683749847148777!3d37.980525214853714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6381f8d5928c7f%3A0xd627129b38c4ab9a!2sMurcia!5e0!3m2!1ses!2ses!4v1687871573499!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "almeria":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51088.63804285708!2d-2.4983162995482564!3d36.841520991940435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7a9e00ecccf2c1%3A0x8d9da01f8ebc485e!2zQWxtZXLDrWE!5e0!3m2!1ses!2ses!4v1687871587250!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "granada":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50860.9916204614!2d-3.6324714451680244!3d37.180939117787936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd71fce62d32c27d%3A0x9258f79dd3600d72!2sGranada!5e0!3m2!1ses!2ses!4v1687871600493!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "jaen":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50454.79415197311!2d-3.838064687352883!3d37.780087177599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dd713cb5302c7%3A0x9cfb2c858b405702!2zSmHDqW4!5e0!3m2!1ses!2ses!4v1687871613144!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "cordoba":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50378.625724572514!2d-4.825684985887518!3d37.89153722046883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6cdf26f95e0aef%3A0x4df1d2e8108456c3!2zQ8OzcmRvYmE!5e0!3m2!1ses!2ses!4v1687871626593!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "malaga":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d102341.81919036264!2d-4.531668242742733!3d36.71819360250621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7259c44fdb212d%3A0x6025dc92c9ca32cf!2zTcOhbGFnYQ!5e0!3m2!1ses!2ses!4v1687871640661!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "sevilla":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101459.60364853186!2d-6.0374595583196164!3d37.37534216627649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd126c1114be6291%3A0x34f018621cfe5648!2sSevilla!5e0!3m2!1ses!2ses!4v1687871663500!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "cadiz":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51305.028074051974!2d-6.323666853712161!3d36.51637931601278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dd25724ec240f%3A0x40463fd8ca03b00!2zQ8OhZGl6!5e0!3m2!1ses!2ses!4v1687871680006!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "huelva":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25400.189254946225!2d-6.960289956156472!3d37.27086611543101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11cfe6d744284b%3A0xd82baac110b40f83!2sHuelva!5e0!3m2!1ses!2ses!4v1687871692884!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "caceres":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49278.37057463061!2d-6.431918864723686!3d39.471629331119296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd15dfe1495a2363%3A0x690bbafe8741c23!2zQ8OhY2VyZXM!5e0!3m2!1ses!2ses!4v1687871707000!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "badajoz":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49695.20906280857!2d-7.028878772740988!3d38.87937281203251!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd16e43eac5f354d%3A0x688c7e359714a4a9!2sBadajoz!5e0!3m2!1ses!2ses!4v1687871723862!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "baleares":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393424.55173883884!2d2.58200231806989!3d39.61303214880661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMallorca!5e0!3m2!1ses!2ses!4v1687871748285!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case prov.includes("palmas"):
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56303.31319960273!2d-15.517558555652663!3d28.117338714446742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc40950e91c097d1%3A0xab36b5ac5338ba65!2sLas%20Palmas%20de%20Gran%20Canaria%2C%20Las%20Palmas!5e0!3m2!1ses!2ses!4v1687871808270!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;
    case "tenerife":
      return(
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112247.17194401182!2d-16.442231984563232!3d28.45773154724644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc41cceccc254171%3A0x43111473d277e52e!2sSanta%20Cruz%20de%20Tenerife!5e0!3m2!1ses!2ses!4v1687871836831!5m2!1ses!2ses" width="300" height="250"  loading="lazy" ></iframe>
      )
      ;

    }
}
{/* <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50057.87547852751!2d-0.47252415!3d38.3578408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6235da3b9dab4b%3A0x1d7da872ac0b81e3!2sAlicante%20(Alacant)%2C%20Alicante!5e0!3m2!1ses!2ses!4v1687863294429!5m2!1ses!2ses"
      width="200"
      height="200"
      
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe> */}
export default Locations