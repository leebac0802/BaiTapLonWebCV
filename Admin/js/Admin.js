var std = {
	"username": "dieptv",
	"fullname": "Tran Van A",
	"email": "a@gmail.com"
}

var stdJson = `{
		"username": "dieptv",
		"fullname": "Tran Van A",
		"email": "a@gmail.com"
	}`;

var arr = [1, 5, 2, 10]
var arrJson = '[1, 5, 2, 10]'

var stdList = [
	{
		"username": "dieptv",
		"fullname": "Tran Van A",
		"email": "a@gmail.com"
	}, {
		"username": "dieptv",
		"fullname": "Tran Van A",
		"email": "a@gmail.com"
	}, {
		"username": "dieptv",
		"fullname": "Tran Van A",
		"email": "a@gmail.com"
	}
]

var stdListJson = `[
		{
			"username": "dieptv",
			"fullname": "Tran Van A",
			"email": "a@gmail.com"
		}, {
			"username": "dieptv",
			"fullname": "Tran Van A",
			"email": "a@gmail.com"
		}, {
			"username": "dieptv",
			"fullname": "Tran Van A",
			"email": "a@gmail.com"
		}
	]`
var stdListMinifyJson = '[{"username":"dieptv","fullname":"Tran Van A","email":"a@gmail.com"},{"username":"dieptv","fullname":"Tran Van A","email":"a@gmail.com"},{"username":"dieptv","fullname":"Tran Van A","email":"a@gmail.com"}]'


var json = JSON.stringify(stdList)
console.log(json)

var arr = JSON.parse(stdListJson)
console.log(arr)

function saveLocalStorage() {
	var username = document.getElementById('username_id').value
	var fullname = document.getElementById('fullname_id').value
	var email = document.getElementById('email_id').value

	localStorage.setItem('username', username)
	localStorage.setItem('fullname', fullname)
	localStorage.setItem('email', email)
}

function readLocalStorage() {
	document.getElementById('username_id').value = localStorage.getItem('username')
	document.getElementById('fullname_id').value = localStorage.getItem('fullname')
	document.getElementById('email_id').value = localStorage.getItem('email')
}


var resultTag = document.getElementById('result')

var studentList = []

function saveData() {
	var username = document.getElementById('username_id').value
	var fullname = document.getElementById('fullname_id').value
	var email = document.getElementById('email_id').value

	var std = {
		'username': username,
		'fullname': fullname,
		'email': email
	}

	if (cIndex >= 0) {
		studentList[cIndex] = std
		cIndex = -1 
	} else {
		studentList.push(std)
	}

	showData()

	return false
}

function showData() {
	resultTag.innerHTML = ''

	var index = 0
	for (std of studentList) {
		resultTag.innerHTML += `<tr>
				<td>${index + 1}</td>
				<td>${std.username}</td>
				<td>${std.fullname}</td>
				<td>${std.email}</td>
				<td>
					<button onclick="editStudent(${index})">Sua</button>
					<button onclick="removeStudent(${index})">Xoa</button>
				</td>
			</tr>`
		index++
	}
}

var cIndex = -1
function editStudent(index) {
	cIndex = index

	document.getElementById('username_id').value = studentList[index].username
	document.getElementById('fullname_id').value = studentList[index].fullname
	document.getElementById('email_id').value = studentList[index].email
}

function removeStudent(index) {
	var option = confirm('Are you sure you want to delete this Admin?')
	if (!option) return

	studentList.splice(index, 1)

	showData()
}