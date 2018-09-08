import React from 'react'
import Steps from './components/Steps'
import Cards from './components/Cards'

export default class XP extends React.Component {

    state = {
        selected: 0,
        isVisible: false
    }

    paragraph = `Lorem ipsum dolor sit amet, ignota causae ut vis, vidit mnesarchum accommodare eam eu. In sed tritani integre definitiones, nam utamur accusata gloriatur an. Ad utinam altera sit. Ea eius delectus gubergren has. Adhuc molestiae ne has.

    Ne pro everti deterruisset. Libris persius pri at, ea everti meliore eum. At putant fabellas liberavisse sed, simul incorrupte vel ea. Ad porro referrentur per, consul tritani in nam. Magna postulant ea nam, iudico ullamcorper ut eum. Mel legimus suscipit cu.
    
    Audire propriae ex his, percipit cotidieque ad sea, graecis admodum te sea. Ne vel mucius bonorum. Vis legere persecuti in, qui no clita ornatus. Per cu justo elitr bonorum, magna putent efficiendi ius ex, ut eum dicat graece putant. Habeo equidem an mel, erant paulo mel et, cu everti impetus usu. Vix no sumo vulputate.
    
    Zril affert in mel. Eos ne eligendi adversarium complectitur, virtute expetendis ex eam. Nam atqui veniam maiestatis ex, mel movet cetero percipit ex. Vel te harum conceptam, mea tollit fabulas partiendo at, at quo autem graeci consectetuer. Ea has simul singulis comprehensam.
    
    Quod facete eam ea. Ea summo imperdiet vim. Dicit tantas quaestio vim ut, doctus accumsan persecuti ne usu. Legere fastidii ea quo. Te ius duis movet delicatissimi. Ius eu dictas minimum incorrupte, electram honestatis ne vim, rebum adipisci eam eu.`

    roles = [
        {
            header: "Title 1",
            meta: "Company 1",
            description: <p>{this.paragraph}</p>,
            extra: "Date 1",
            icon: 'fighter jet'
        },
        {
            header: "Title 2",
            meta: "Company 2",
            description: <p>{this.paragraph}</p>,
            extra: "Date 2",
            icon: 'plane'
        },
        {
            header: "Title 3",
            meta: "Company 3",
            description: <p>{this.paragraph}</p>,
            extra: "Date 3",
            icon: 'car'
        },
        {
            header: "Title 4",
            meta: "Company 4",
            description: <p>{this.paragraph}</p>,
            extra: "Date 4",
            icon: 'bicycle'
        },   
    ]

    onClick = (i) => {
        this.setState({selected: i})
    }
    
    render() {
        let props = {
            roles: this.roles,
            selected: this.state.selected,
            onClick: this.onClick
        }
        return <div id="xp" className="section">
            <div className="section-container">
                    <h1 className="inverted">My Experience</h1>
                    <br/>
                    <Steps {...props} />
                    <br/>
                    <Cards {...props} />
            </div>
        </div>
    }
}