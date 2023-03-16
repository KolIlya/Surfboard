const findBlockByAlias = (alias) => {
    return $(".reviews__item").filter((ndx, item) => {
        return $(item).attr("data-linked-with") === alias;
    });
};

$(".interactive-avatar__link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const showItem = findBlockByAlias(target);
    console.log(showItem);
    const currentItem = $this.closest(".reviews__switcher-item");

    currentItem.addClass("reviews__switcher-item--active").siblings().removeClass("reviews__switcher-item--active");

    showItem.addClass("reviews__item--active").siblings().removeClass("reviews__item--active");
});
