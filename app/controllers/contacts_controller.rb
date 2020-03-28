class ContactsController < ApplicationController
    def new
      @contact = Contact.new
    end

    def create
      @contact = Contact.new(params[:contact])
      @contact.request = request
      if @contact.deliver
        @contact = Contact.new
        flash.now[:success] = "Message envoyé!"
      else
        flash.now[:notice] = "On n'a pas pu envoyer votre message !"
      end
    end
end
