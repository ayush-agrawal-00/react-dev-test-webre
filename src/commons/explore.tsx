import App from '../assets/images/app-development.svg'
import Web from '../assets/images/webdesign.svg'
import Graphic from '../assets/images/graphic-design.svg'
import Digital from '../assets/images/digital-marketing.svg'
export type explore={
    
        logo:any,
        title:String,
        para:String
}
export const exploreArr:explore[] = [
    {
        logo:App,
        title:'App Development',
        para:'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus'
    },
    {
        logo:Web,
        title:'Web Designing',
        para:'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus'
    },
    {
        logo:Graphic,
        title:'Graphic Designing',
        para:'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus'
    },
    {
        logo:Digital,
        title:'Digital Marketing',
        para:'ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod metus vel sem bibendum, a bibendum justo tempor. Sed vel lectus'
    }
]