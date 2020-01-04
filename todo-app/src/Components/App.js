import React from "react";
import ListItem from "./ListItem";
import '../Style/app.css'
import '../Style/listItem.css'
import Header from "./Header";
import Search from "./Search";
import ListItemDefaultBg from "./ListItemDefaultBg";
import AddNote from "./AddNote";
class App extends React.Component{
    constructor() {
        super();
        this.state={
            addNoteData:"",
            searchData:"",
            activeTabId:0,
            uniqueId:0,
            list:[],
            tab:[{
                title:'Home',
                status:true
            }, {
                title: 'Completed',
                status: false
            },{
                title:'Remaining',
                status:false
            }
            ]

        }

    }
    inputChange=(event)=>{
        this.setState({
            addNoteData:event.target.value
        });
    };
    addNote=(event)=>{
        if(event.key==='Enter'){
            this.setState({
                uniqueId:this.state.uniqueId+1,
                list:this.state.list.concat({
                        data:event.target.value,
                        isCompleted:false,
                        id:this.state.uniqueId,
                }),
                addNoteData:""
            });
        }
    };
    listItemClickHandler=(id)=>{

        const item=this.state.list.map((item)=> {
            if(item.id===id){
                item.isCompleted=!item.isCompleted;
            }
            return item
        });
        this.setState(item)

    };
    changeTab=(id)=>{
        this.setState({
            activeTabId:id
        });
        const tabItem=this.state.tab.map((tab,index)=>{
            tab.status = id === index;
            return tab;

        });
        this.setState(tabItem)
    };
    searchInputHandler=(event)=>{
        this.setState({
            searchData:event.target.value
        });
    };
    filterData=(array=[],search='')=>array.filter((value) => {
        if(value.data.includes(search)){
            let item=null;
            switch(this.state.activeTabId){
                case 1:
                    if(value.isCompleted) {item= value;}
                    break;
                case 2:
                    if(!value.isCompleted) {item= value;}
                    break;
                default:{item = value;}
            }
            return item;
        }

    });

    render() {
        return (
            <div className={'container'}>
                <Header handler={this.changeTab} data={this.state.tab}/>
                <div className="main-body">
                    <Search handler={this.searchInputHandler}/>
                   <AddNote inputData={this.state.addNoteData} inputChangeHandler={this.inputChange} addNoteHandler={this.addNote} />
                <div className="list-container">
                   {
                       this.state.list.length===0?<ListItemDefaultBg/>:this.filterData(this.state.list,this.state.searchData).map((value,index)=>
                           <ListItem clickHandler={()=>
                               this.listItemClickHandler(value.id)}
                                     data={value.data}
                                     key={index}
                                     status={value.isCompleted}
                           />
                           )
                   }
               </div>

                </div>
            </div>

        )
    }
}
export default App