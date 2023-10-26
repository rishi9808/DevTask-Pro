{/* <div>
  <div classNameNameNameNameName="about-section">
    <h2>About Us</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, sapien nec eleifend aliquam, ex nibh lacinia justo, et volutpat lorem massa ac urna.</p>
    <p>Pellentesque at magna at arcu vehicula euismod sed a nunc. In et sem ut elit pharetra fringilla ut vitae libero.</p>
  </div>
  <div classNameNameNameNameName="signup-section">
    <h2>Sign Up</h2>
    <form onSubmit={handleSubmit}>
      <div classNameNameNameNameName="form-group">
        <label htmlFor="userName">Name:</label>
        <input type="text" id="name" name="userName" value={data.userName} onChange={handleChange} required></input>
      </div>
      <div classNameNameNameNameName="form-group">
        <label htmlFor="passWord">Password:</label>
        <input type="password" id="password" name="passWord" value={data.passWord} onChange={handleChange} required></input>
      </div>
      <div classNameNameNameNameName="form-group">
        <button type="Submit">Submit</button>
      </div>
    </form>
  </div>

</div> */}

{/* <div classNameNameNameName="main-content">
  <div classNameNameNameName="left-section">
   
  </div>
  <div classNameNameNameName="center-section">
    <div classNameNameNameName="job-card">
      <h2>Job Title</h2>
      <p>Job Description</p>
      <div classNameNameNameName="job-footer">
        <div classNameNameNameName="job-eligibility">Eligibility</div>
        <button classNameNameNameName="registration-button">Register</button>
      </div>
    </div>
  
  </div>
  <div classNameNameNameName="right-section">
    <div classNameNameNameName="ad-space">
    
    </div>
    <div classNameNameNameName="ad-space">
    
    </div>
  </div>
</div> */}


// <div classNameNameName="form-container">
//     <h1>Create New Job</h1>
//     <form action="submit-form.php" method="POST">
//       <div classNameNameName="form-group">
//         <label htmlFor="title">Title:</label>
//         <input type="text" id="title" name="title" required></input>
//       </div>

//       <div classNameNameName="form-group">
//         <label htmlFor="datetime">Date and Time:</label>
//         <input type="date" id="date" name="datet" required></input>
//       </div>

//       <div classNameNameName="form-group">
//         <label htmlFor="whatsapp">WhatsApp Group Link:</label>
//         <input type="text" id="whatsapp" name="whatsapp" required></input>
//       </div>

//       <div classNameNameName="form-group">
//         <label htmlFor="students">Number of Students Needed:</label>
//         <input type="number" id="no_stud" name="no_stud" required></input>
//       </div>

//       <div classNameNameName="form-group">
//         <input type="submit" value="Submit"></input>
//       </div>
//     </form>
//   </div>

{/* <div classNameNameName="app">
      <button onClick={openPopup}>Open Popup</button>

      <div classNameNameName={`popup-container ${isPopupOpen ? 'active' : ''}`}>
        <div classNameNameName="popup-content">
          <h2>Popup Content</h2>
          <p>This is the content of the popup.</p>
          <button >Close</button>
        </div>
      </div>

      <div classNameNameName="main-content">
        <h1>Main Content</h1>
        <p>This is the main content of the site.</p>
      </div>
    </div> */}



  //   <table>
  //   <tr>
  //     <th>Sl. No.</th>
  //     <th>Student Name</th>
  //     <th>Eligibility</th>
  //     <th>Actions</th>
  //   </tr>
  //   <tr>
  //     <td>1</td>
  //     <td>John Doe</td>
  //     <td>Eligible</td>
  //     <td classNameName="button-container">
  //       <button classNameName="button">Accept</button>
  //       <button classNameName="button reject">Reject</button>
  //     </td>
  //   </tr>
  //   <tr>
  //     <td>2</td>
  //     <td>Jane Smith</td>
  //     <td>Eligible</td>
  //     <td classNameName="button-container">
  //       <button classNameName="button">Accept</button>
  //       <button classNameName="button reject">Reject</button>
  //     </td>
  //   </tr>
  // </table>



  // <div className="notiContainer">
  //   <h1>Notifications</h1>

      

  //     <div className="notification new">
  //       <h2 className="title">New Notification</h2>
  //       <p className="details">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at augue tellus. Proin auctor erat ut elementum vulputate.</p>
  //     </div>

     

  //     <div className="notification read">
  //       <h2 className="title">Read Notification</h2>
  //       <p className="details">Sed lacinia finibus luctus. Fusce lacinia efficitur tortor, sit amet fermentum arcu cursus in. Quisque tempus massa vel lectus commodo, ac tincidunt lectus posuere.</p>
  //     </div>
  // </div>


  // const districtDistanceMap = [
  //   ["Thiruvananthapuram", 0],
  //   ["Kollam", 40],
  //   ["Pathanamthitta", 70],
  //   ["Alappuzha", 100],
  //   ["Kottayam", 120],
  //   ["Idukki", 170],
  //   ["Ernakulam", 200],
  //   ["Thrissur", 250],
  //   ["Palakkad", 300],
  //   ["Malappuram", 350],
  //   ["Kozhikode", 400],
  //   ["Wayanad", 450],
  //   ["Kannur", 500],
  //   ["Kasaragod", 550]
  // ]
  
 


  // function gettSortedDist(districtName) {
  //   const districtEntry = districtDistanceMap.find(
  //     (entry) => entry[0] === districtName
  //   );
  //   const dist=districtEntry[1];  
   
  //   const districtsWithDiff = districtDistanceMap.map(([district, distance]) => ({
  //     district,
  //     difference: Math.abs(dist - distance)
  //   }));
  
  //   // Sort the array based on the absolute difference in ascending order
  //   districtsWithDiff.sort((a, b) => a.difference - b.difference);
  
  //   // Extract only the district names from the sorted array
  //   const sortedDistricts = districtsWithDiff.map((item) => item.district);
  //   console.log(sortedDistricts)

  // }
  

  function sortJobsByDistrict(jobs, districts) {
    // Create a mapping of district names to their corresponding index in the districts array
    const districtIndexMap = new Map();
    nearDist.forEach((district, index) => {
      districtIndexMap.set(district, index);
    });
  
    
    const sortedJobs =  props.alljobs.slice().sort((jobA, jobB) => {
      const districtAIndex = districtIndexMap.get(jobA.district);
      const districtBIndex = districtIndexMap.get(jobB.district);
  
      
      return districtAIndex - districtBIndex;
    });
  
    return sortedJobs;
  }
  