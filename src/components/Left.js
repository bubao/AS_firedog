import React from 'react';
// var Character = require('../sources/Data/need.json');
require('../styles/CharBox.css');
require('../styles/Left.css');
require('../styles/CharFull.css');
var Character = require('../sources/Data/need.json');

var AS_StringTable = require('../sources/data/AS_StringTable.json');
class Left extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			id: 1
		}
	}
	componentWillReceiveProps(nextProps) {
		this.setState({
			id: nextProps.id
		});
	}
	charAbility(id) {
		if (Character[id].ability == undefined) {
			return <div>ability undefined</div>
		} else {
			Character[id].ability.map((item) => (
				<div>
			<div>{AS_StringTable.AbilityName[item]}</div> < div > {
				AS_StringTable.AbilityDesc[item]
			} < /div>
				</div>

			));
		}
	}
	render() {
		let id = this.state.id;
		let ab
		if (Character[id].ability == undefined) {
			ab = (<div>ability undefined</div>)
		} else {
			ab = (Character[id].ability.map((item) => (
				<div>
			<div>Name:{AS_StringTable.AbilityName[item]}</div>
			<div > 详情: {AS_StringTable.AbilityDesc[item]}</div>
				</div>

			)));
		}
		return <div className='l'>
			<div className = {`abox c_${('0000' + id).slice(-4)}`} ></div>
			<div>ID:{Character[id].id}</div>
			<div>名称:{Character[id].name}</div>
			<div className='element'>属性:<div className={`l${Character[id].element}`}/></div>
			<div>稀有度:{Character[id].rare}</div>
			<div>种族:{AS_StringTable.race[Character[id].race]}{Character[id].race2==undefined ?'':`/${AS_StringTable.race[Character[id].race2]}`}</div>
			<div>cost值:{Character[id].cost}</div>
			<div>最大等级:{Character[id].maxLevel}</div>
			<div className='inputo' >进化材料: <div className='input'>{Character[id].input.map((item)=>{
					if (item==0) {
					return <div className = 'no'> 不可进化 </div>
					}
					return <div className = {`cbox  c_${('0000' + item).slice(-4)}`} ></div>
				}
				)}
					<div className ={Character[id].card?'cbox c_0888':''}></div>
				</div>
			</div> 
			
			{/**lihui**/}
			<div>队长技能:{AS_StringTable.skillNameText[Character[id].leaderSkill]}</div>
			<div>详情：{AS_StringTable.skillText[Character[id].leaderSkill]}</div>
			<div>------------------------</div>
			<div>技能:{AS_StringTable.ActiveSkillName[Character[id].skill]}</div>
			<div>详情：{AS_StringTable.ActiveSkillText[Character[id].skill]}</div>
			<div>------------------------</div>
			<div>AB技{ab}</div>
				
			<div>------------------------</div>
			<div>物语：{AS_StringTable.charDescription[id]}</div>
		</div>
	}
}
export default Left;
/*<div className = {`fbox f_${('0000' + id).slice(-4)}`}> </div>*/
/**
 * <div>队长技能：{AS_StringTable.skillNameText[Character[id].leaderSkill]}</div>
 * <div>详情：{AS_StringTable.skillText[Character[id].leaderSkill]}</div>
 * <div>物语：{AS_StringTable.charDescription.id}</div>
 * <div className = {`fbox f_${('0000' + id).slice(-4)}`}> </div>
 *
 * <div>ability: <div>{if(Character[id].ability==undefined){
				return <div>ability undefined</div>
				}
				Character[id].ability.map((item)=>(
					<div>
						<div>{AS_StringTable.AbilityName[item]}</div>
						<div>{AS_StringTable.AbilityDesc[item]}</div>
					</div>
					
					))
			} </div></div>
 */