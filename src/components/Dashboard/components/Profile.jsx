import React from "react";
import "./profile.css";
import sucess from './Success.svg'
let profData={
  name:"Smiket Barodia",
  id:'2018A7PS0231H',
  bmail:'f20180231@hyderabad.bits-pilani.ac.in',
  pnumber:'9926188556',
  address:"11 Palsikar Colony",
  hostel:'RAM',
  roomno:'R437',
  dob:'adssa',
  complaints:[],
}
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading:true,
      msg: "",
      isOpen: true,
      profileData:profData
    };
  }
  componentDidMount(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email:"Smiket@gmail.com"})
      };
      fetch('/api/student/profileData', requestOptions)
      .then(response=>response.json())
      .then(data=>{
        this.setState({
          profileData:data
        })
      }).catch(error=>{
        console.log(error)
      })
      this.setState({
        loading:false,
      })
      console.log("ksjdlsdl");
      console.log(this.state.profileData)

    let x=document.querySelectorAll(".form-inp");
    let temp=this.state.profileData;
    for(var i=2;i<x.length-1;i++)
    {
      let ele=document.getElementById(x[i].id);
      ele.value=temp[x[i].id];
      console.log(temp[x[i].id]);
    }


  }

  render() {

    const handleChange=(e)=>{
      let temp=this.state.profileData;
      temp[e.target.id]=e.target.value;
      this.setState({profileData:temp});
    }
    const updateProfile=()=>{
      document.getElementById('msg-suc').classList.add("show-up");
      setTimeout(()=>{
        document.getElementById('msg-suc').classList.remove("show-up");
      },3000);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.state.profileData)
        };
        fetch('http://localhost:4000/api/student/profile', requestOptions)
        .then((res)=>{
          console.log(res)
        }).catch(error=>{
          console.log(error)
        })
    }

    return (
      <div>
      {
        this.state.loading?
        <div>
          Loading....
        </div>:<div
        style={{
          color: "white",
          width: "100%",
          height: "100vh",
          background: "white",
        }}
        >
        <div id="msg-suc"  className="succ-msg" style={{display:'flex',zIndex:'1',position:'absolute',fontSize:'100%',background:"black",height:'3em',alignItems:'center'}}>
          <div style={{background:'mediumaquamarine',width:'4px',height:'3em'}}/>
          <img src={sucess} style={{marginLeft:'0.5em',height:'25px'}}/>
          <b style={{marginLeft:'0.5em'}}>
            Profile Updated Successfully!</b>
        </div>
        <div style={{position:'relative',background:'dodgerblue',width:'100%',height:'10em'}}>
          <h1 style={{marginLeft:'10px'}}>{this.state.profileData.name}</h1>
          <img
            style={{height:'100px',position:'absolute',right:'50%',top:'65%',background:'indianred',border:'4px solid white',borderRadius:'50%'}}
            src="https://lh3.googleusercontent.com/a-/AOh14GhWp1heTCVFlWVkb3EQaZqcZFFwWyc7f-hmxpKs5g=s96-c"
            />
        </div>
        <div style={{width:'100%',background:'white'}}  className="profile-grid">
          <div style={{width:'80%'}}>
            <div style={{margin:'0.5em',background:'white',position:'relative'}}>
              <input value={this.state.profileData.id} placeholder="NIL" type="text" className="form-inp"/>
              <div className="bottom-border"/ >
              </div>
            </div>

            <div style={{width:'80%'}}>
              <div style={{margin:'0.5em',background:'white',position:'relative'}}>
                <input value={this.state.profileData.bmail} disable placeholder="NIL" type="text" className="form-inp"/>
                <div className="bottom-border"/ >
                </div>
              </div>
              <div style={{width:'80%'}}>
                <div style={{margin:'0.5em',background:'white',position:'relative'}}>
                  <input value={this.state.profileData.pnumber} id="pnumber" onChange={handleChange} placeholder="Phone No." type="text" className="form-inp"/>
                  <div className="bottom-border"/ >
                  </div>
                </div>

                <div style={{width:'100%'}}>
                  <div style={{width:'80%',margin:'0.5em',background:'white',position:'relative'}}>
                    <select value={this.state.profileData.hostel} id="hostel" className="form-inp" onChange={handleChange} style={{width:'100%'}}>
                      <option>Hostel</option>
                      <option>RAM</option>
                      <option>GANGA</option>
                      <option>VK</option>
                      <option>VALMIKI</option>
                      <option>BUDDH</option>
                      <option>MALVIYA</option>
                      <option>MEERA</option>
                      <option>GAUTAM</option>
                      <option>GANDHI</option>
                      <option>KRISHNA</option>
                    </select>
                    <div className="bottom-border"/ >
                    </div>
                  </div>
                  <div style={{width:'80%'}}>
                    <div style={{margin:'0.5em',background:'white',position:'relative'}}>
                      <input value={this.state.profileData.address} id="address" onChange={handleChange}  placeholder="Address" type="text" className="form-inp"/>
                      <div className="bottom-border"/ >
                      </div>
                    </div>



                    <div style={{width:'80%'}}>
                      <div style={{margin:'0.5em',background:'white',position:'relative'}}>
                        <input value={this.state.profileData.roomno} id="roomno" onChange={handleChange} placeholder="Room No." type="text" className="form-inp"/>
                        <div className="bottom-border"/ >
                        </div>
                      </div>

                      <div style={{width:'100%'}}>
                        <div style={{width:'80%',margin:'0.5em',background:'white',position:'relative'}}>
                          <input value={this.state.profileData.dob} onChange={handleChange} placeholder="NIL" style={{width:'100%'}}  type="date" className="form-inp"/>
                          <div className="bottom-border"/ >
                          </div>
                        </div>
                        <button onClick={()=>updateProfile()} style={{background:'dodgerblue',fontSize:'25px',color:'white',border:'none',outline:'none',padding:'4px 16px',borderRadius:'5px',cursor:'pointer',margin:'0.5em'}}>Update Profile</button>
                      </div>
                    </div>

      }
      </div>
    );
                }
              }
