const User = require("../models/user");

const createUsers = async (req, res) => {
  try {
    const names = ["Rahul Kumar", "Priya Sharma", "Arjun Singh", "Neha Kapoor", "Manish Verma", "Kavya Nair", "Rohan Mehta", "Sneha Gupta", "Vikram Singh", "Pooja Patel", "Amit Sharma", "Divya Reddy", "Karan Malhotra", "Ananya Das", "Raj Patel", "Simran Kaur", "Dev Sinha", "Nisha Joshi", "Aakash Mehta", "Riya Sharma"];
    
    const professions = ["Frontend Developer", "Backend Developer", "Full Stack Dev", "UI/UX Designer", "DevOps Engineer", "Data Scientist", "Product Manager", "Software Engineer", "React Developer", "Node.js Developer"];
    const status2 = ["follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow","follow"];

    for (let i = 0; i < names.length; i++) {
      await User.create({
        name: names[i],
        email: names[i].toLowerCase().replace(" ", "") + `${i}@gmail.com`,
        password: "123456",
        profession: professions[i % professions.length],
        status:status2[i % status2.length]
      });
    }
    
    res.status(201).json({ message: "Users created successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getuser = async (req, res) => {
  try {
    const { userId } = req.query
    const users = await User.find({ _id: { $ne: userId } })
    res.status(200).json(users)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


const followUser = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    if(user.status === "follow"){
      user.status = "following"
    }else{
      user.status = "follow"
    }
    await user.save()
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const getuserinfo = async (req, res) => {
  try {
    const { id } = req.params
    const user = await User.findById(id)
    res.status(200).json(user)
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}


  module.exports = {createUsers,getuser,followUser,getuserinfo};