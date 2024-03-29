'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    let LunBo=[
      {
        imgUrl:'https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner-03.2bdc431.jpg'
      },
      {
        imgUrl:'https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner-04.6abf9bd.jpg'
      },
      {
        imgUrl:'https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner-02.62866d0.jpg'
      },
      {
        imgUrl:'https://cdn-prod.z11.ren/zaojia-ui/2.0.0/static/img/banner-01.c8d41dc.jpg'
      }
    ]
    ctx.body = LunBo;
  }

  async mainlist() {
    const { ctx } = this;
    let MainList=[
      {
        name:"软装"
      },
      {
        name:"建材"
      },
      {
        name:"辅材"
      },
      {
        name:"更多"
      }
    ]
    ctx.body = MainList;
  }


  async tablist() {
    const { ctx } = this;
    let tablist=[
      {
        title:"方案效果",
        imgUrl:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAWCAYAAADafVyIAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NTIwZTk1Yi01MTViLThlNDMtOWZiYy1lMDYzZDY0MDZhOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk4MzM2QzVERjQwMTFFNzg1NzBDQkFGQ0NEOTE1NTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk4MzM2QzRERjQwMTFFNzg1NzBDQkFGQ0NEOTE1NTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxZmRjZGE0LWFkZjQtMWI0MC1iNTEzLTBlMzQyOWRhOTU1NSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI3Mjk2NTUzLWM0ODEtNGI0MS05MTY5LTQ2ZDI5Yjk2ODQzZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plm+ZHcAAAIlSURBVHjatJXNS5RRFMbnLSRaKEELI4JUMBcl5hT4NZY1o7NppppwkpEWkW1kgjbipk06tO6/CCK0D0XBMahWgiDYJBG0qEUhKEi0MXWm58Rz4XCYd76gCz/mvfeeOc97z3vOuV6hUAj81yECRuQS+ArWwNkq3T0GH8BT4P3zawQiokmRJJ9bKnT+nvaO++L3kDKIgiVwi8bbIM3TXCnjfBnsgNdq7aQN0XdwnpuHQQPoB/PgMwj5ON/gi7nxG+RBoz2BbHh8PgB1IAxugFXwEnQY5x/BNzDI+VWwBYJg055ggLGLGSfitBWMc9+J5MCcsktwv10nkP3IYRpFjIhk0yRI8UWyJt4x/q/bZmixNI3SOKzW2sARPr/jR3UjTvueYiVQTMDFssBfG/NZNR+mXZ9fjfkJBJiasjGknC+q/RT3T5Qq4lIC7iTXwFswo9bvgC/gMngBOmsVcEWUVfMRprSk7z2QAbusmaoFciZbkqwRyap6xv4MeMaCi1YjsA7eGOdi2GTsLoLjfBEpsnOVCHxii3DjOtgHXWCKH1iPNNuMK8ZmPwGPx9VhuQn2wAXO79JJwoh4LLgxV9HFBKSP/1F/us3GFTTOQnQSV2vSu47xOzyX8FoBjy1aJhPMkl9+KajqRPeuUxSXHpWxAmlzYfwAp8vcA920HVVrK65mrECexj/BIx63ktHLunjA6/KVXxZNg4fgaA1Xu9TCAnhi6+CvAAMAIagmgpSAxbcAAAAASUVORK5CYII=",
        msg:'手机查看平面方案、施工图纸、VR全景效果等'
      },
      {
        title:"工地播报",
        imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAaCAYAAAC+aNwHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUE5MEU1ODREOEVGMTFFNzk1OUY5NDlDMjc5NEZBNDIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUE5MEU1ODVEOEVGMTFFNzk1OUY5NDlDMjc5NEZBNDIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFQTkwRTU4MkQ4RUYxMUU3OTU5Rjk0OUMyNzk0RkE0MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFQTkwRTU4M0Q4RUYxMUU3OTU5Rjk0OUMyNzk0RkE0MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgyjddIAAAHTSURBVHjapJTPK0RRFMfnx/NjjCJhYpQVpYkyUrOxkYmNUhKzkJSFrCxE2bHQ/AeztLWZsJEQC5KUhVlQaBSl2fiV38PM873T902327yZJ6c+r/vePed7z73v3OO05bcusAL84AXcqA7OAgIloALUgBAYA4fg3mbRykGV9D4PdDBkVaAFnIBrEOW3AEX8hYK9oI7jMrADPvg+kus8DBNBB+ACnDODDs5tgn2Oz8C4GlwNkjz5RlALpplyD32+gBssgg1VYF1aQbYJCgu7A7OgGxyrjjEQNNnaLWgAvaCTvzeoKU5P4NNEQKTepqS97cCjFXikj6UmAnbwynE7yCwuBLbAsMW6eAQucAQqDYF3pmfV5EwyAuJ0038I1hmjGwL/MkNAl77ly0YcXIo+dkPALQUV5TmPH56Xg3cjm8ED77uNxRHIESyudDO45C8XfeLZmAyDXY5D3E6TIpAAaxzPqTfRwyAv35fAG1jlpYqDPclf+E6qKYY5oUmNJAKWlSITRXdqdsJRNs7BHHM+9oWEtEi2MGSbAjMUirED+bg9cc1HrdZHHzvONztxsZmjUykqF4Ou+OuSbB4p6ZamzbawAPopIIqmnkFx7ltjUxmQBX4FGADvyGY7l3Q+7AAAAABJRU5ErkJggg==',
        msg:'工地施工进展实时同步，工地情况一手掌握'
      },
      {
        title:"小管家",
        imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAZCAYAAADNAiUZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA39pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo2NTIwZTk1Yi01MTViLThlNDMtOWZiYy1lMDYzZDY0MDZhOTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk4MzM2QzlERjQwMTFFNzg1NzBDQkFGQ0NEOTE1NTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk4MzM2QzhERjQwMTFFNzg1NzBDQkFGQ0NEOTE1NTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjIxZmRjZGE0LWFkZjQtMWI0MC1iNTEzLTBlMzQyOWRhOTU1NSIgc3RSZWY6ZG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjI3Mjk2NTUzLWM0ODEtNGI0MS05MTY5LTQ2ZDI5Yjk2ODQzZiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgeUz88AAAGgSURBVHjavJZPKARRHMffLIaSuFj/c1qlHPw7OSkHLv6Uk+TmRCmpzUGOTi5yJgfrQpILpRwcnHBSijiQcqJEy2GN79NPzU6/mTfz3jTf+mzta97vs/t6837PchxHyFiWJUJkHAyBHtAip4EXcAFOQQ4UggpInxVSugjmQQ24BLfgUdYADaANdIMU2ARzQdK/j38xk0bwRMWXQHXADysFM+ATfIBeHWk7yc5AhYiWLZo7EkVaR5N2hH6yVKMvrPQVXAnzbJBYKZ31PmiYPNhWSeWX5Rilg1TT9pN20s6LO/IVm+akreAY3IFRMAHSBqISMEx1rsED6PBKj2gZ3KwbSAeYegfSlXI9ZDMTKw2kVczYu6Bjy73LuJ2nm29mrOCVJhbV8pYb1C5jxmyvlBOYHBJfPk2hqLV10YtsEXL998C9plT+q0kwRufvKjiE70bV2uLICZiK0k9Ns0uHgkhKukJ7oj4p6T4JMzrXFb80g34i49r9C+CNNl9a947EpZY5U8/BMzWLrOo2qCNtAj/0HubpIrZGHUWZoitokvkVYADTDfimGUuTugAAAABJRU5ErkJggg==',
        msg:'全程为业主提供咨询、帮助、售后服务支持'
      },
      {
        title:"满意度",
        imgUrl:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAUCAYAAACJfM0wAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTMyIDc5LjE1OTI4NCwgMjAxNi8wNC8xOS0xMzoxMzo0MCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUuNSAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RjhFN0JBN0JEOEVGMTFFN0EzMEFGQzM1MTgyRDg1RjIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RjhFN0JBN0NEOEVGMTFFN0EzMEFGQzM1MTgyRDg1RjIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpGOEU3QkE3OUQ4RUYxMUU3QTMwQUZDMzUxODJEODVGMiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpGOEU3QkE3QUQ4RUYxMUU3QTMwQUZDMzUxODJEODVGMiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhJEDCgAAAGPSURBVHjarJRNKERRGIbPGD81ygplIRtCiRElKYm1ssHGRrK0tVEabNgrGyV2VmoaNlaUGoX8JSVRaEj5KRkaf+9X7+i43Xvu3Du+err33PN+7/n6zjlXKfdoBt/gDCTAIyhRWUYpTRe1b5vg3auRVBcHR2CMzwMb3QeYA6NgnzltJuNdcAVmwR2rrbLRjXDukgvI89BkfA5mtHELyLXRlYEubTzNPfgNa1IK5GvjbYcCEiQdxeBFF+RYEmShpI9NLmDfHY0lgj6Mv6x5VuM39s9rFIJPk/ExaPVh3AROTIJGHqMaD6Z1zKl1E8atG+ESYrqaqVjO8zWoMGjKwT04dTPrBROgB+SBJVazBoZANW+h6FY4Nw8CoB9EmPunR7fgFVyAZ3ADGkA92AIPPFIpzu+AMG+mXP0n5iZ5vSsVB/IjCXEhqWCKFXVqBeyx/+mb2U3NuKYporG0UXU4tGaYiWGO10GU7+2c67PJC3DeGFEaSMTAsnYSFrL50csFmtRascH3iPrHGAQDmYp/BBgAmw5esOVFKaoAAAAASUVORK5CYII=',
        msg:'业主对施工过程进行360度评价，评价决定服务团队绩效'
      }
    ]
    ctx.body = tablist;
  }
}

module.exports = HomeController;
