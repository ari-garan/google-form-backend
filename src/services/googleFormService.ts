import { MESSAGE } from "../common/constant";
import { FormValues, ResponseTS } from "../common/interface";
import FormModel from "../models/Form";
import FormResponseModel from "../models/FormResponse";

export const createService = async (data: FormValues): Promise<ResponseTS> => {
  try {
    console.log(data)
    const create = await FormModel.create(data);
    return {
      statusCode: 201,
      status: MESSAGE.SUCCESS,
      message: "Form created successfully",
      data: { formId: create._id }
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    };
  }
};

export const submitService = async (formId: string, data: FormValues): Promise<ResponseTS> => {
  try {
    const check = await FormModel.findById(formId);
    if (!check) {
      return {
        statusCode: 404,
        status: MESSAGE.ERROR,
        message: "Form not found",
      };
    }

    const create = await FormResponseModel.create({
      formId: formId,
      title: data.title,
      description: data.description,
      isDisabled: data.isDisabled,
      questions: data.questions,
    });

    return {
      statusCode: 200,
      status: MESSAGE.SUCCESS,
      message: "Response submitted successfully",
      data: { responseId: create._id }
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    };
  }
};

export const getFormIdService = async (): Promise<ResponseTS> => {
  try {
    const getFormId = await FormModel.find().select("_id");
    if (!getFormId || getFormId.length === 0) {
      return {
        statusCode: 404,
        status: MESSAGE.ERROR,
        message: "No forms available",
      };
    }
    return {
      statusCode: 200,
      status: MESSAGE.SUCCESS,
      message: "Form IDs fetched successfully",
      data: getFormId,
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    };
  }
};

export const getFormService = async (formId: string): Promise<ResponseTS> => {
  try {
    const check = await FormModel.findById(formId).select("-__v -_id");;
    if (!check) {
      return {
        statusCode: 404,
        status: MESSAGE.ERROR,
        message: "Form not found",
      };
    }
    return {
      statusCode: 200,
      status: MESSAGE.SUCCESS,
      message: "Form retrieved successfully",
      data: check
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    };
  }
};

export const getSubmittedResponseService = async (formId: string): Promise<ResponseTS> => {
  try {
    const getData = await FormResponseModel.findOne({ formId: formId }).select("-__v -_id");
    if (!getData) {
      return {
        statusCode: 404,
        status: MESSAGE.ERROR,
        message: "No response found for this form",
      };
    }
    return {
      statusCode: 200,
      status: MESSAGE.SUCCESS,
      message: "Form response retrieved successfully",
      data: getData
    };
  } catch (error: any) {
    return {
      statusCode: 400,
      status: MESSAGE.ERROR,
      message: error?.message,
    };
  }
};
