+ function (view) {
    view._elm = {
        itemIconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAclBMVEUAAABmMzN8Jz6AJkR8K0J9KUF9KUJ9KUF8KUF9KEF9KkB9KUB+KEF9KUF+KUGAAIB+KEB9KkF9KUGAJ0V9KUF9KkF8KUF9KEF9KUF9KUF9KUF9KUF9KUF9KUF9KUJ9KUF9KEF9KUF9KUGAQEB9KUEAAAC9PyS0AAAAJHRSTlMABSEiQu3a/tNmvraS8pQCX5leGqndqL369bvi27ynlZHZ7AQz4vV4AAAAAWJLR0QAiAUdSAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAAd0SU1FB+MJDwwNIfmqJtwAAADDSURBVFjD7ZfLDoIwFEQHLEUQWrQK+ESx//+NbjUhBjoqjXD2cxZ32lsAZnwgCBfOhAEgIksQCUgmb60El7cxK7DDBMvkmXS4YPXSXzZJQQe8IOfyORQnUNCFWjujNnrsZeIFZit3zsjSoOJqrFBzgvpbd2F/6MHxjeDUZ/7ZfwvoIQ6okT5I5FE+w5TMZbqY8daAR3BrvdBouBoV/7Rx+V8971n3/K9TEqRJJ9VnWoi5fMx+7t8gWibfCuBO/vLMeMADoeo3KRyWq4oAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMTVUMTI6MTM6MzMrMDA6MDCfI7sHAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTE1VDEyOjEzOjMzKzAwOjAw7n4DuwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",
        completedIconSrc: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAMAAABrrFhUAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC7lBMVEUAAACAQEB8KT58KEB9KkJ8KUF9KUF+KUF9KUF9KUF9KUF9KUF9KUF9KUF8KEB7K0CAAIB2Jzt+KUF+KkJ8KUF9KUF9KEF9KUB5JD2AKEN+KkJ9KUB9KUF9KUGAIECAK0d9KUF+KUF9KkF9KD59K0F9KEJ9KkJ9KUB9KUF9KUF8KUF8KUBmMzN9KEF9KUF9KUF8KUB9KkF9KkB9KUF8KEF8KEJVAFV9KUB+KEJ8K0F+KUF9KUJ+KEB9KkN9KUF9KUF8KUCAK0B8KEB9KkF9KUF9KUGAK0R9KkF8KUGAM019KUGAMEB9KUF8KUGAK0B9KEB+KkF9KUF9KUF9Kj58KEF9KEEAAAB6KT19KUF9K0NxHDl+J0OAJEl9KUGAKEB9KUF9KUF9KkF9KEF9KkF9KUF8LD57LD58K0J+KEJ8K0B9KUB9KEJ+KUJ9KEB7KUB9KUF+KkF+KUF9KUB9KUF9KUF8KUBtJEl9KUJ9KkF7K0J9KkF4LTx8J0F9KUF8KUF9KUF+KUF8KUF7JkJ9KUF9KUF6LEN+KEF9KUJ8KUF+KEF9KEF9KEN9KUKALkZ+KUF8KkKAJkCAJ0V9KUF9KkF9KUF9KUGAJkR+KkJ+KUN9KUF9KUF9KkB9KEB9KUJ9KkJ7KUJ+KUJ8KUF8KEB8LEJ9KUB+KUCAJEB3IkR9KEF9KUF8Jz5+KUF9KUF9KEF8KUF9J0F9KUJ9KUGAJkB9KkB+KUJ+KUF+KUKAJ0N8KUJ+KkB5KEN+KUF9KUF9KUF7KUJ9KkF9KEJ9KUB9KkB9KkF9KUF9KUGAK0CAK1V9KUF9KEGAK0B9KUF8K0B0LkZ+KUB7KEJ7J0B8KUB8KUB+KUF9KUJ9KkF9KEF9KkF8KEF+KUJ8KEF8KUF9KEF9KEF9KUF9KkF9KUF+KEGAK0N9KUJ+KkF8KkB9KEF8KUF8KUF9KUJ+KkJ+KEKAKUJ+KUF9KUJ9KEF9KUF+KEF9KUF8KUF9KkF9KUF+KkJ9KEF9KUEAAABC9/GsAAAA+HRSTlMABCVMdJq5ydTf7vzbtH88Ag1LjM3544MVJoDG+/UIEmrH1y0vbJ/C8+SmewUzqvZQN5PmpEYDtllOxdpfPcD6RDBAmf7tHnqcCu8Qu9Ekyk/V6jFS0AEZ3DUJQQ7oIJ2tK+lulSkdQk1UrnhRYDj0ho6X4v1rB9aBNlYRJ/hx8sN1G/HgF5ivolOxOdIWgm0oGuWN8LAiVUXI576Lm2g+hEpzI7pXHA8/oSGWdpHTO3DsFLJdwYguaVsTiszrH7irZFxi994YBrWFDF5IC2M6NHdvlLOlt92ekHnPvVrYrLxHKs5DZ36ooKNhZTLLfGa/kuF9xIlJckMnLoMAAAABYktHRACIBR1IAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4wkPDCI3H2Kr4AAADRJJREFUeNrtnXtgFMUdxzfhFe8COYSggQsJIYQQFXzEINGQQAItkAeCBIwQRFpqeSQS0kjFABqkEZFiwFgKlPdLJNZoeYlBbCgoPlraWrXUgm3FtmDfdv/sJSGXu9vH/Oa3OzM76X3/3vntfD+Z28z+9jczikKhiMguXbt17xF1ncutMpQrumevGA9Nx3io9/V9+saytB2ifjfcKNpygOL6D/ByNN+m+F4DRftuU0LiIO7m25Q02GLXPclDUob2c3lTh/VNuynmZlSMW4bzHPghGnGrFfu33X5HULTU9DszaGPEjBTnvkXuu9D2R2XqxLv7ngiaGFmjxdr3KTsHZ3+MUdeTxoJjJOTmibbv07jxCPsZX8s2DJj39QmgGJ7EiaK9t2kkvf9J+aYRCwoBMeKKRBv3azKt//H3EiJOmUqMcZ9D/vwtmlZM53/6DGLIifebhyjJFW06SA9Q+Z8ZBQg5q9QsRGmBaMvBmk3jv/hBUMwokyfhnH6iHYfoIZrfwFxg0G8YRshy0M//mr4J9z8vFRgz71sGER4eIdquVt+GA5gPDlqgPy0exf+tj6wFYP8LKaIu0gtQVi7arJ4egfqfSfP4itJ5tAx23u+/RYuhACqowuZonyBLRFvVV3+g/7JKqrCaf68lDvv/79d3YP6rHqUL6wrNkDhr/hegHBiApbRxvxvc/jHRPo3kXgby/3g1beDlQe3jVog2aqQikH/PSurAKYHtM5zz/huqJ0AAEukDD7XYnpOqp0P8P1lDH3lVQPunXKJ9Gmo1aAB8DxF5SkD7WtE2DbXiSYj/pzGhUzvaZzkh/6mvuRD/M4dhQgeMAPH5byOtASUDcFOYaH/7Z0TbNNTaSRD/yAE82h9A8PcfY/V9FuK/ipQGNlBFe4BbRPs00preoP8A65DhE9sDDBdtVF8rvg9LBq6nngNfU3uqLUHg919jVa9+DmRf8QxA3qGuna8DJ4Huoq6g+V+LhmBvsqE9Am39w5L82lyGWrwuMQf2/teq5zZiASRfixBH9afpvgg0M+On57H+/f8El8LbeHPrRfsN1QtY/+oP2kPAnyGbrNbs2K9lP8T639weojf4S8AWqvISPtqK9R/r/9x0PbBF5Y9Em9XRNvRL3Dp/jD7AFqC3Ms6izQN3KLqjBrEvrMUW0Wb1tB3rX93hjxEBmwZuwlUZstVg9BQ2rSNIJKiBNxnfTWbyZIL6rqOagFl2F1CLXNFm9QSthdAqMSDKTkgD9y7RZnU0Hv0hoyiwNAD0j7S7aLN6WoP17w6qktsNabII20mG2oP1H/K1fROkyV7RbrXaV4f1f8e+oEBRgCb9RLvV0Wz0AFgYHAhSE5Ev2q1W+9Fz4NDaY0hRzAHRdjWqSsL6j38xJFQ2oNFB0X41egTrX30pNBSk0SHRfkM1GPJn01WDZkovIwB0HljNe1kTTEYAP8b6V7tpg0kIYHwq1v8rjZ0CwKvoAfCaTjT5ANyF9v8TvU9t0gFImIX1H6tbdi8dgBT0AFiqG082AGPRc+Bo/bXYkgEoiUYPgB36ESUDcBjtP80golwAjqDnwDVG1QZSAcDPgdWjRjGlArAc7b/IcOcAmQDg58Bu49XCMgHAz4E3GAeVCMAxtP8lJuV28gA4/hAawEKTsPIAOID2b7oHgzQAHkDPgTV5UCkBlMxADwDzJTeyAHgd7b/BvLRBEgD4OXDly+aR5QCQcQI9AEilDXIAAFUx6OqNRkJoKQA0paIBvEaKLQWAk2j/o4lLDtgC8CTfs732zfz56YdPleHrzN5C+69+nBicIYCSxx4M/PZcfvKnoBVQGjW+gQawjhydGYDph7WF/M25kYhItWj/0YA9KRkBmHBDs26oytXHaUPdifbfURHPHcD+VYbBxu2hRHka7T8NEp8FgOJeptvubqXaLHUL2v/EnwkCEEEqYBpE8TNIRs+BjfOgjAGcOUsMWABaENoKE1jMrqNNHjEAiiGJiyToorgn0P7d5F0T2QB4G9S9BtgYqI9HA4DuvmQ3gLHAbceTQE+o7mj/S94RA2AmuIIVMgbOof2b5kFZAoCuQFIhY+D4FLR/+F609gJ4keafVgNp//h0tP/yJkEAbqfqJmEMvIv2D9x6yH4A+ygf2qZj4L3r0P7XUrx62wrgfdqemo2BxWj/lR/A/dsLALT8JPhvZTgGfo4/xqMbtL92A6hqhkQLltEYsDAHJuZBmQHYhumuAYFfoP2rb9H4txXAeVR/dQmU4nd3JedBmQH4Ja7HegTonybtiqXYhtluAL9C9ln7JFyE9m9QD8oHAHpHstAx0IifA0PyoMwA4DelDBkDaehAoDwoMwD0u3r69WjgGLAwB/41rX9bAXyI73gggQm/QUepAe4+xQjARxYABBD4GB8Esc+JnQA+sQLAT+B+/By4yCMWwChLANSC1ifhzdPQAbxj6P3bCiCBbnNzjVrHgIVh1Afh3963wd9aA6AWNCqR+BMuwHlQdgBusgjANwby8Y1vxfi3F8Auy7vz4sth1TUo/zbnBHtaBYCXeT0oLwCojIA96orzb/d3gbOi/DdgS5BsBlCI3eHVoqjyoCwBKAvEAMBvdWU3AA8+l2NBdHlQpgCU4+j9TSyILg/KFoBSit7iCK0LlGcysgWgxPEmELse759JlRhvAtCTqLgB4EyAOg/KHgBfAjlW/LMqleVIIB3SH09W/57RLjV+Vmbu74KrFBkB4EdgIyAP+uz2wENYYp/fzwEANwLkPOjApZq6jc1z2APgRICcB03+VKdZ9kvtUwd2ALgQ8BLrQRca5Nh+P5A5AB4EiHnQY4ZJ9osDmQNgT4CYB71kUrf3ZjFzAMwJTCbcf6/pcqOu7AEwJkCsBzWvNY79jD0ApgSIeVDSGXQXOABQ4lAHwYFEyoMW/4EUIYvHytFIVgSI9aB/JIaYz2XpLCMC5Dwoee1KbAKXtcNsCBCP4iwGrDjdw2fxNAsCs4inUc0BRKngtHqcAYFjxJtC9p8fymv5vO0EAPWgkEqDOm77B9hMoHo9+ZaQvQfL+W2gYC8BSB70ECBOHscdJOwkcDckDwoBoPLcQsNGAjmQ+zkOgH0EQHlQBwKwi8BG2MpjBwKwicCfYDdzIgBbCEDrQR0JwAYC5DyoowFYJwA++M+hAKwSgNeDOhWARQKTwfdxLABLBM7Cb+NcABYIxJd2CgB4AjspbuJkAFgCNOvinQ0AR4CuHtTZAFAEKqju4HAACALkPKhUAOgJkPOgcgGgJUC5Ll4CAHQEIHlQ2QBQEficNrgMACgIfFrVKQGACXjpl4TIAQBKYC59ZEkAwAikIALLAkCJJJ99fDmiMwNQ5t1L6MAXGZiw8gBQEs6a3d67E7ciRiIASnFX4124ZmxDBpUJgKLUGxwjNeJz9HoQuQAoyjOvateeu95+Ch9QNgCK0vRJ38A9KMqH73nPSjj5APiUMGrBRx8O7THyzx+fmoo/kUFiAHYqDCAMIAwgDCAMIAwgDCAMIAwgDCAMIAwgDCAMIAwgDCAMIAwgDCAMQAsAcjTUQdFWcDoIsJatuABXHRBtBSfISV3jFPKnaVXNF20Fp80Aa6uUKMBV/URbwQmyeUeDsglwlTpetBeMmiDOMmFnOv5FtBmM/gpxdlLpBrlst2gzGEEeAWqFshNymbtQtBt6xYEOO1iudIFcpm4VbYdeKSBjO5RI0HVuzOEVQnUFdlJJvRIRC7qwh9WP9Zx15gTIVnWGogDP9dsg2hKdQO8BqnpVgZ/ufl60JxodBZo67Lt2B/DaykTRruAaAj3u5pLv4t7go4IXS/IcOAM+qiq2tQgrE3q5WgRduC5UV66CDQ1tbdALfL3qnu34GVFkCsVJXV+2NaE5G6fy4vsOfjNqOnWB5rCrvPq2ZgMo2rSo7kJ6rgOVfoF288qV17gdpWzXafS3awCWCToZRrSaJ7X/dC6L7ooYpfmfHWMsHxEmo/KudDw9z4rujAgFHs5WJrozIhS0EPHvonvDX8Fpvpj/u6dAZVnwHOoL0R3irdAk3/FXRPeIr8Zpzns/KrpLfHVK8x7h6SG6TzyV6dG+SRVuFN0rfppYr/cu+YLobvHT0/pv0xWi+8VL/zBIJ1QBM+Sya5rhYty9/xTdNx4a1mScUpozTnTv2GvjEcVEt5WL7h9rjYhRTPWwV3QP2crbRSGoS7z1uzhX1feR/Pt+BYCTOWSVK4bsX1E+g1TOSam6IxD/itJEPJ9ITp2YB/PvmxEBv67LpdoSqH+fFk4U3V27VbOHwr5PhYNE99heZdbT+VeU4nNTRHfaPrnOe2j9+5RwiOZLq4OVV3sjwn6LPrgouu92aHcZ0n6Lpg6XPV+eb8V+i8ZclvjbcXNaskX7LZp0Ll/OYXDifKMN9ltV+K9/g2vJnKHslV9S/+Mz1zvvvn5Vkh9DddF/LlnahMxQGbu++u/qkwPWnnY5MGvgdZ1eO+Dk6uVf7aLafvJ/F9LFHFwa5z0AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDktMTVUMTI6MzQ6NTUrMDA6MDCALCUCAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA5LTE1VDEyOjM0OjU1KzAwOjAw8XGdvgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=",
        mainBody: document.getElementById('mainBody'),
        inputField: document.getElementById("input"),
        allTasksList: document.getElementById('allTasksList'),
        inProgressList: document.getElementById('inProgressList'),
        completedList: document.getElementById('completedList'),
        allTasksTab: document.getElementById('allTasksTab'),
        inProgressTab: document.getElementById('inProgressTab'),
        completedTab: document.getElementById('completedTab'),
        addBtn: document.getElementById('addBtn'),
        tabBar: document.getElementById('tabBar'),
        tabs: document.getElementsByClassName('tablinks'),
        editModal: document.getElementById('editModal'),
        editInputField: document.getElementById('modalInput'),
        modalBtn: document.getElementById('modalBtn'),
        closeModalIcon: document.getElementById('closeModalIcon')
    }

    view._elm.closeModalIcon.onclick = function () {closeModal(); }

    view._elm.tabBar.onclick = function (e) {
        switch (e.target.textContent) {
            case 'All Tasks':
                view._elm.allTasksTab.style.display = "block";
                view._elm.inProgressTab.style.display = "none";
                view._elm.completedTab.style.display = "none";
                view._elm.tabs[1].className = view._elm.tabs[1].className.replace(" tablinks-active", "");
                view._elm.tabs[2].className = view._elm.tabs[2].className.replace(" tablinks-active", "");
                e.target.className += " tablinks-active";
                break;
            case 'Active':
                view._elm.inProgressTab.style.display = "block";
                view._elm.completedTab.style.display = "none";
                view._elm.allTasksTab.style.display = "none";
                view._elm.tabs[0].className = view._elm.tabs[0].className.replace(" tablinks-active", "");
                view._elm.tabs[2].className = view._elm.tabs[2].className.replace(" tablinks-active", "");
                e.target.className += " tablinks-active";
                break;
            case 'Completed':
                view._elm.completedTab.style.display = "block";
                view._elm.inProgressTab.style.display = "none";
                view._elm.allTasksTab.style.display = "none";
                view._elm.tabs[0].className = view._elm.tabs[0].className.replace(" tablinks-active", "");
                view._elm.tabs[1].className = view._elm.tabs[1].className.replace(" tablinks-active", "");
                e.target.className += " tablinks-active";
                break;
        }
    }

    function getInput() {
        return view._elm.inputField.value;
    }

    function resetInput() {
        view._elm.inputField.value = '';
    }

    function getEditInput() {
        return view._elm.editInputField.value;
    }

    function resetEditInput() {
        view._elm.editInputField.value = '';
    }

    function openModal() {
        view._elm.editModal.style.display = 'block';
    }

    function closeModal() {
        view._elm.editModal.style.display = 'none';
    }

    function createElement(tag, className) {
        const element = document.createElement(tag);
        element.className = className;
        return element;
    }

    function createTodoItem(item, id) {
        const listItem = createElement("li", "item");
        const taskTitleWrapper = createElement("div", "task-title-wrapper");
        const taskControlsWrapper = createElement("div", "task-controls-wrapper");
        const itemIcon = createElement("img", "item-icon");
        const taskTitle = createElement("div", "task-title");
        const completeBtn = createElement("div", "btn complete-btn");
        const editBtn = createElement("div", "btn edit-btn");
        const deleteBtn = createElement("div", "btn delete-btn");

        itemIcon.src = item.completed ? view._elm.completedIconSrc : view._elm.itemIconSrc;

        deleteBtn.title = "Delete";
        completeBtn.title = "Completed";
        editBtn.title = "Edit";
        taskTitle.textContent = item.text;
        listItem.id = id;

        taskTitleWrapper.appendChild(itemIcon);
        taskTitleWrapper.appendChild(taskTitle);

        taskControlsWrapper.appendChild(completeBtn);
        taskControlsWrapper.appendChild(editBtn);
        taskControlsWrapper.appendChild(deleteBtn);

        listItem.appendChild(taskTitleWrapper);
        listItem.appendChild(taskControlsWrapper);

        return listItem;
    }

    function initializeLists() {
        view._elm.allTasksList.innerHTML = "";
        view._elm.inProgressList.innerHTML = "";
        view._elm.completedList.innerHTML = "";
    }

    function emptyLists() {
        view._elm.allTasksList.innerHTML = "<li class='default-item'>Nothing to do.</li>";
        view._elm.inProgressList.innerHTML = "<li class='default-item'>Nothing in progress.</li>";
        view._elm.completedList.innerHTML = "<li class='default-item'>Nothing completed.</li>";
    }

    function createAllTasksList(items) {
        items.forEach(item => {
            const id = "item1_" + item.id;
            const listItem = createTodoItem(item, id);
            view._elm.allTasksList.appendChild(listItem);
        })
        if (!view._elm.allTasksList.hasChildNodes())
            view._elm.allTasksList.innerHTML = "<li class='default-item'>Nothing to do.</li>";
    }

    function createInProgressList(items) {
        items.forEach(item => {
            if (!item.completed) {
                const id = "item2_" + item.id;
                const listItem = createTodoItem(item, id);
                view._elm.inProgressList.appendChild(listItem);
            }
        })
        if (!view._elm.inProgressList.hasChildNodes())
            view._elm.inProgressList.innerHTML = "<li class='default-item'>Nothing in progress.</li>";
    }

    function createCompletedList(items) {
        items.forEach(item => {
            if (item.completed) {
                const id = "item3_" + item.id;
                const listItem = createTodoItem(item, id);
                view._elm.completedList.appendChild(listItem);
            }
        })
        if (!view._elm.completedList.hasChildNodes())
            view._elm.completedList.innerHTML = "<li class='default-item'>Nothing completed.</li>";
    }

    view.displayLists = function (items) {
        if (!items.length) {
            emptyLists();
            return;
        }
        initializeLists();
        createAllTasksList(items);
        createInProgressList(items);
        createCompletedList(items);
    }

    view.bindAddItem = function (handler) {
        view._elm.addBtn.addEventListener('click', () => {
            if (getInput()) {
                handler(getInput());
                resetInput();
            }
        })
    }

    view.bindDeleteItem = function (handler) {
        view._elm.mainBody.addEventListener('click', event => {
            if (event.target.className === 'btn delete-btn') {
                var id = event.target.parentElement.parentElement.id;
                id = parseInt(id.substr(6, id.length - 1));
                handler(id);
            }
        })
    }

    view.bindEditItem = function (handler) {
        var id;
        view._elm.mainBody.addEventListener('click', event => {
            if (event.target.className === 'btn edit-btn') {
                id = event.target.parentElement.parentElement.id;
                id = parseInt(id.substr(6, id.length - 1));
                openModal();  
            }
        })
        view._elm.modalBtn.addEventListener('click', function() {
            if (getEditInput()) {
                handler(id, getEditInput());
                resetEditInput();
                closeModal();
            }
        })
    }

    view.bindCompleteItem = function (handler) {
        view._elm.mainBody.addEventListener('click', event => {
            if (event.target.className === 'btn complete-btn') {
                var id = event.target.parentElement.parentElement.id;
                id = parseInt(id.substr(6, id.length - 1));
                handler(id);
            }
        })
    }
}(view);