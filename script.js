var audio = new Audio('assets/bgm/Harry Potter loop.mp3');
audio.play();

let app = new function() {
    this.el = document.getElementById('tasks');

    this.tasks = []; // variabel array penampung


    this.FetchAll = function() {
        let data = '';

        if (this.tasks.length > 0) {
            for (let i = 0; i < this.tasks.length; i++) {
                data += '<tr>';
                data += '<td>' + (i + 1) + ". " + this.tasks[i] + '</td>';
                data += '<td><button class="btn" onclick="app.Edit(' + i + ')">Edit</button></td>';
                data += '<td><button class="btn" onclick="app.Delete(' + i + ')">Delete</button></td>';
                data += '</tr>';
            }
        }

        this.Count(this.tasks.length);
        return this.el.innerHTML = data;
    };

    this.Add = function() {
        let el = document.getElementById('add-todo');
        // Untuk mendapatkan value
        let task = el.value;

        if (task) {
            // menambah value baru
            this.tasks.push(task.trim());
            // mereset value yang telah diinput
            el.value = '';
            // menampilkan value ke list
            this.FetchAll();
        }
    };

    this.Edit = function(item) {
        let el = document.getElementById('edit-todo');
        // menampilkan value di dalam field
        el.value = this.tasks[item];
        // menampilkan field fields
        document.getElementById('edit-box').style.display = 'block';
        self = this;

        document.getElementById('save-edit').onsubmit = function() {
            // menambahkan value
            let task = el.value;

            if (task) {
                // mengedit value yang sudah ada.
                self.tasks.splice(item, 1, task.trim());
                // menampilkan value baru ke dalam list baru
                self.FetchAll();
                // untuk menyembunyikan fields edit
                CloseInput();
            }
        }
    };

    this.Delete = function(item) {
        // menghapus baris
        this.tasks.splice(item, 1);
        // menampilkan list yang baru
        this.FetchAll();
    };

    this.Count = function(data) {
        let el = document.getElementById('counter');
        let name = 'Tasks';

        if (data) {
            if (data == 1) {
                name = 'Task'
            }
            el.innerHTML = data + ' ' + name;
        } else {
            el.innerHTML = 'No ' + name;
        }
    };

}

app.FetchAll();

function CloseInput() {
    document.getElementById('edit-box').style.display = 'none';
}