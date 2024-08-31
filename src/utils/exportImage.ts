import { switchCase } from "./utils";

import csharp from "@/assets/iconos/csharp.png";
import angular from "@/assets/iconos/angular.png";
import ionic from "@/assets/iconos/ionic.png";
import mysql from "@/assets/iconos/mysql.jpeg";
import php from "@/assets/iconos/php.png";
import sqlserver from "@/assets/iconos/sqlserver.png";
import javascript from "@/assets/iconos/javascript.png";
import reactjs from "@/assets/iconos/reactjs.png";
import photoshop from "@/assets/iconos/photoshop.png";
import vuejs from "@/assets/iconos/vuejs.png";

const exportImage = (img: string) => {
    return switchCase(img, {
        csharp: () => csharp,
        angular: () => angular,
        ionic: () => ionic,
        mysql: () => mysql,
        php: () => php,
        sqlserver: () => sqlserver,
        javascript: () => javascript,
        reactjs: () => reactjs,
        photoshop: () => photoshop,
        vuejs: () => vuejs,
    })
}

export default exportImage;