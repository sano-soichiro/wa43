<script setup lang="ts">
import { ref, computed } from "vue";

const editSec = ref(false);
const pushId = ref(0);
const editName = ref("");
const editMail = ref("");
const editTel = ref("");
const editNote = ref("");
const error = ref("");

interface Person {
  id: number;
  name: string;
  mail: string;
  tel: string;
  note?: string;
}
const personListInit = new Map<number, Person>();
personListInit.set(0, {id: 4451, name: "しんちゃん", mail: "shin@hoge.com", tel: "09012345678", note: "へんなやつ"});
personListInit.set(1, {id: 4463, name: "たけちゃん", mail: "take@hoge.com", tel: "08098765432"});
personListInit.set(2, {id: 4474, name: "けんちゃん", mail: "ken@hoge.com", tel: "07045678912"});
personListInit.set(3, {id: 4482, name: "だいちゃん", mail: "dai@hoge.com", tel: "09078459632"});
const personList = ref(personListInit);

const edit = (id: number) => {
  editSec.value = true;
  pushId.value = id;

  editName.value = personList.value.get(id)?.name as string;
  editMail.value = personList.value.get(id)?.mail as string;
  editTel.value = personList.value.get(id)?.tel as string;
  editNote.value = personList.value.get(id)?.note as string;
}
const edited = () => {
  if(editName.value.length != 0 && editMail.value.length != 0 && editTel.value.length != 0) {
    const changeList = personList.value.get(pushId.value) as Person;
    console.log(document.getElementById("editName"));
    changeList.name = editName.value;
    changeList.mail = editMail.value;
    changeList.tel = editTel.value;
    changeList.note = editNote.value;
  
    editSec.value = false;
  }
}
</script>

<template>
  <section v-for="[id, person] in personList" v-bind:key="id">
    <h2>{{ person.name }}</h2>
    <label for="id">ID</label>
    <p id="id">{{ person.id }}</p>
    <label for="mail">メールアドレス</label>
    <p id="mail">{{ person.mail }}</p>
    <label for="tel">電話番号</label>
    <p id="tel">{{ person.tel }}</p>
    <label for="note">備考</label>
    <p id="note">{{ person.note }}</p>
    <button type="button" v-on:click="edit(id)">このメンバー情報を編集</button>
  </section>
  <form action="./" v-on:submit.prevent="edited()" v-show="editSec">
    <p>必要な情報を入力してください。</p>
    <p>{{ error }}</p>
    <label for="editId">ID</label>
    <p id="editId">{{ personList.get(pushId)?.id }}</p>
    <label for="editName">名前</label><br>
    <input type="text" id="editName" name="editName" v-model="editName" required><br>
    <label for="editMail">メールアドレス</label><br>
    <input type="email" pattern=".+@.+\..+" id="editMail" name="editMail" v-model="editMail" required><br>
    <label for="editTel">電話番号</label><br>
    <input type="text" id="editTel" name="editTel" v-model="editTel" required><br>
    <label for="editNote">備考</label><br>
    <textarea name="editNote" id="editNote" cols="30" rows="10" v-model="editNote">{{ editNote }}</textarea><br>
    <button type="submit">変更</button>
  </form>
</template>

<style>
</style>