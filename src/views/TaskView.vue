<template>
  <div class="task">
    <div class="task__header">
      <template v-if="root">
        <button class="task__button" @click="editTask">
          <span class="task__button-icon task__button-icon_edit" />
        </button>
        <button class="task__button" @click="deleteTask">
          <span class="task__button-icon task__button-icon_delete" />
        </button>
      </template>
      <button class="task__button" @click="showHome">
        <span class="task__button-icon task__button-icon_close" />
      </button>
    </div>
    <h1 class="task__title">
      {{ selectTask.todo }}
    </h1>
    <ul class="task__about">
      <li class="task__action">
        <span class="task__action-icon task__action-icon_user" />
        <span class="task__action-text">
          Người tạo
        </span>
      </li>
      <li class="task__action">
        <span class="task__action-icon task__action-icon_user" />
        <span class="task__action-text">
          Người thực hiện
        </span>
      </li>
      <li class="task__action">
        <span class="task__action-icon task__action-icon_copy" />
        <span class="task__action-text">
          Trạng thái
        </span>
      </li>
      <li class="task__action">
        <span class="task__action-icon task__action-icon_note" />
        <span class="task__action-text">
          Tài liệu tham khảo
        </span>
      </li>
      <li class="task__action">
        <span class="task__action-icon task__action-icon_flag" />
        <span class="task__action-text">
          Mức độ quan trọng
        </span>
      </li>
      <li class="task__action">
        <span class="task__action-text">
          Minh Vũ
        </span>
      </li>
      <li class="task__action">
        <span class="task__action-text">
          Minh Vũ
        </span>
      </li>
      <li>
        <BadgeText text="Khẩn cấp" />
      </li>
      <li>
        <a class="task__action-link" target="_blank" rel="noopener">
          https://www.youtube.com/results?search_query=tổ+chức
        </a>
      </li>
      <li>
        <BadgeText text="Khẩn cấp" />
      </li>
    </ul>
    <div class="task__nav">
      <button class="task__button-nav task__button-nav_active">
        Chi tiết
      </button>
      <button class="task__button-nav">
        Chi tiết
      </button>
      <BadgeText text="Khẩn cấp" />
    </div>
    <div class="task__block">
      <h3 class="task__title">
        Mô tả
      </h3>
      <p class="task__desc">
        Trung thu sắp đến nên các đơn vị đã chuẩn bị lên kế hoạch tổ chức Trung Thu cho các em nhỏ, không chỉ tổ chức Đêm
        Hội Trăng Rằm ở các địa phương mà nhà trường cũng như các cơ quan cũng sẽ có kế hoạc Trung Thu riêng cho đơn vị
        mình.
      </p>
    </div>
    <DialogEdit v-if="showDialog" :todo="selectTask" @closeDialog="closeDialog" />
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import AppService from '@/app/service/app-service';
import BadgeText from '../components/BadgeText.vue';
import DialogEdit from '@/components/DialogEdit.vue';

export default {
  name: 'TaskView',
  components: {
    BadgeText,
    DialogEdit
  },
  data() {
    return {
      showDialog: false
    }
  },
  computed: {
    ...mapState({
      selectTask: state => state.app.selectTask
    }),
    ...mapGetters({
      root: 'isAppUserRoot'
    }),
  },
  methods: {
    showHome() {
      this.$router.push({ name: 'home' })
    },
    deleteTask() {
      AppService.deleteTodos({ todoId: this.selectTask.id })
        .then(() => {
          this.showHome()
        })
        .catch((e) => {
          console.log(e)
        })
    },
    editTask() {
      this.showDialog = true
    },
    closeDialog() {
      this.showDialog = false
    }
  }
}
</script>


<style scoped lang="scss">
.task {
  padding: 30px 25px;

  &__header {
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    justify-content: flex-end;
  }

  &__button {
    width: 24px;
    height: 24px;

    &:not(:last-child) {
      margin-right: 24px;
    }
  }

  &__button-icon {
    background: no-repeat center / cover;
    height: 100%;
    width: 100%;
    display: block;

    &_close {
      background-image: url('../assets/images/cross.svg');
    }

    &_delete {
      background-image: url('../assets/images/trash.svg');
    }

    &_edit {
      background-image: url('../assets/images/edit.svg');
    }
  }


  &__title {
    font-weight: 600;
    line-height: 1.5;
    letter-spacing: 0.005em;
    color: #21252B;
  }

  h1.task__title {
    font-size: 32px;
  }

  h3.task__title {
    font-size: 20px;
    margin-bottom: 20px;
  }

  &__desc {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.005em;
    color: #21252B;
    display: block;
    max-width: 50%;
  }

  &__about {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-auto-flow: column;
    grid-gap: 24px 50px;
    margin-top: 48px;
    margin-bottom: 48px;
  }


  &__action {
    display: flex;
  }

  &__action-text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.005em;
    color: #21252B;
  }

  &__action-link {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.005em;
    color: #3E84F4;
    text-decoration-line: underline;
  }

  &__action-icon {
    background: no-repeat center / cover;
    height: 24px;
    width: 24px;
    display: block;
    margin-right: 8px;

    &_user {
      background-image: url('../assets/images/user.svg');
    }

    &_copy {
      background-image: url('../assets/images/copy.svg');
    }

    &_note {
      background-image: url('../assets/images/note.svg');
    }

    &_flag {
      background-image: url('../assets/images/flag.svg');
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    margin-bottom: 30px;
  }

  &__button-nav {
    font-weight: 600;
    font-size: 20px;
    line-height: 1.5;
    letter-spacing: 0.005em;
    color: #848D9A;
    padding: 12px;

    &_active {
      color: #0CAF60;
      border-bottom: 2px solid #0CAF60;
    }
  }

  &__block {
    margin-bottom: 28px;
  }
}

@media (max-width: 850px) {
  .task {
    &__button {
      width: 16px;
      height: 16px;

      &:not(:last-child) {
        margin-right: 16px;
      }
    }

    &__about {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      grid-template-rows: repeat(10, 1fr);
      grid-gap: 12px;
      margin-top: 24px;
      margin-bottom: 24px;
    }

    h1.task__title {
      font-size: 20px;
    }

    h3.task__title {
      font-size: 16px;
      margin-bottom: 14px;
    }

    &__desc {
      font-size: 14px;
    }
  }
}
</style>
