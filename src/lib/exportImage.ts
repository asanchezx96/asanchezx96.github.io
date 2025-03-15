import { switchCase } from "./utils";

import csharp from "@/assets/iconos/csharp.png";
import angular from "@/assets/iconos/angular.png";
import ionic from "@/assets/iconos/ionic.png";
import mysql from "@/assets/iconos/mysql.png";
import php from "@/assets/iconos/php.png";
import sqlserver from "@/assets/iconos/sqlserver.png";
import javascript from "@/assets/iconos/javascript.png";
import reactjs from "@/assets/iconos/reactjs.png";
import photoshop from "@/assets/iconos/photoshop.png";
import vuejs from "@/assets/iconos/vuejs.png";
import visualbasic from "@/assets/iconos/visualbasic.png";

import materialui from "@/assets/iconos/materialui.png";
import vuetify from "@/assets/iconos/vuetify.png";
import quasar from "@/assets/iconos/quasar.png";
import netcore from "@/assets/iconos/netcore.png";
import firebird from "@/assets/iconos/firebird.png";

import mongodb from "@/assets/iconos/mongodb.png";
import soporte from "@/assets/iconos/soporte.png";
import git from "@/assets/iconos/git.png";

import plano1 from "@/assets/img/plano1.jpg";


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
        visualbasic: () => visualbasic,

        materialui: () => materialui,
        vuetify: () => vuetify,
        quasar: () => quasar,
        netcore: () => netcore,
        firebird: () => firebird,

        mongodb: () => mongodb,
        soporte: () => soporte,
        git: () => git,

        plano1: () => plano1,

        deleteIcon: () => "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E",

    })
}

export default exportImage;